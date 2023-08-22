const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');

const path = require('path');

const auth = require('./config/auth')(passport);
const main = require('./routes/main');
const login = require('./routes/login');
const profile = require('./routes/profile');

mongoose
  .connect('mongodb://127.0.0.1/taipham', { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connection successful');
  })
  .catch(err => {
    console.log('MongoDB connection failed: ' + err.message);
  });

const app = express();
app.use(
  session({
    secret: 'abcde',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const orders = require('./routes/orders');
const inventories = require('./routes/inventory');
const users = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/orders', orders);
app.use('/inventories', inventories);
app.use('/users', users);
app.use('/', main);
app.use('/login', login);
app.use('/profile', profile);

app.use((err, req, res, next) => {
  console.log('Error: ' + err);
  // res.render('error', { message: err });
});

app.get('/', (req, res) => {
  res.json({ data: 'Web Fullstack project' });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`sever is running on port: ${PORT}`);
});
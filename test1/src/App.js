import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Translation from "./Translation.json";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
const getTodosFromLS = () => {
  const data = localStorage.getItem("Todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Home = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState(getTodosFromLS());
  const [status, setStatus] = useState("");

  const [language, setLanguage] = useState("us");
  const [content, setContent] = useState({});

  const date = new Date();

  useEffect(() => {
    if (language === "us") {
      setContent(Translation.us);
    } else if (language === "vn") {
      setContent(Translation.vn);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let todoObject = {
      id: date,
      TodoValue: todoValue,
      completed: false
    };
    setTodos([...todos, todoObject]);
    setTodoValue("");
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const filterTodosleft = (todos = []) => {
    return todos.filter((todo) => !todo.completed);
  };

  const filterByStatus = (todos = [], status = "", id) => {
    switch (status) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader
          numOfTodosLeft={filterTodosleft(todos).length}
          setStatusFilter={(status) => setStatus(status)}
          status={status}
          content={content}
        />
        <TodoList
          todos={filterByStatus(todos, status)}
          completeTodo={completeTodo}
          updateTodo={updateTodo}
          setTodos={setTodos}
        />
        <Form
          handleSubmit={handleSubmit}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          content={content}
        />
      </div>
      <Footer setLanguage={setLanguage} content={content} language={language} />
    </div>
  );
};

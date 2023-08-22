import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ todos, completeTodo }) => {
  console.log(todos);
  return todos.map((todo, index) => (
    <div
      className={
        todo.completed ? "todo-item-container done" : "todo-item-container"
      }
      key={index}
    >
      {todo.completed ? (
        <FaRegCheckCircle
          className="item-done-button"
          color="#9a9a9a"
          onClick={() => completeTodo(todo.id)}
        />
      ) : (
        <FaRegCircle
          className="item-done-button"
          color="#9a9a9a"
          onClick={() => completeTodo(todo.id)}
        />
      )}
      {todo.TodoValue}
    </div>
  ));
};

export default TodoList;

const Form = ({ handleSubmit, setTodoValue, todoValue, content }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder={content.enter}
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
      />
      <button>{content.button}</button>
    </form>
  );
};

export default Form;

import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>To Create Task:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write title"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select one category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TodoForm;

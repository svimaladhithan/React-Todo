import React, { useEffect, useState } from "react";
import '../index.css'

const Input = ({ addOrEditTodo, editData, filterTodo, setFilterTodo }) => {
  const [title, setTitle] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    addOrEditTodo(title, description, editIndex);
    setTitle("");
    setDescription("");
    setEditIndex(null);
  };
  useEffect(() => {
    setTitle(editData[0]?.title ? editData[0].title : "");
    setDescription(editData[0]?.description ? editData[0].description : "");
    setEditIndex(editData[0]?.id ? editData[0].id : null);
  }, [editData]);

  return (
    <div>
      
      <h3 className="title">My Todo</h3>
      <div className="input-container">
      <div className="input">
      <input
        type="text"
        value={title}
        placeholder="Enter the title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        placeholder="Enter the description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="btn btn-success btn-sm" onClick={handleSubmit}>Add Todo</button></div>
      <div className="filter">
        
      Status Filter: &nbsp;
      <select className="select"
        value={filterTodo}
        onChange={(e) => setFilterTodo(e.target.value)}
      >
        <option value={"All"}>All</option>
        <option value={"Completed"}>Completed</option>
        <option value={"Not Completed"}>Not Completed</option>
      </select>
      </div>
      </div>
    </div>
  );
};

export default Input;

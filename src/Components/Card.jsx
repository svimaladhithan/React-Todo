import React from "react";
import "../index.css";

const Card = ({ element, index, deleteTodo, editTodo, handleStatusChange }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div key={index}>
          <div className="card-text">
            <span className="bold">Title: </span>
            {element.title}
          </div>
          <div className="card-text">
            <span className="bold">Description: </span>
            {element.description}
          </div>
          <br />
          Status: &nbsp;
          <select
            value={element.status}
            onChange={(e) => handleStatusChange(element.id, e.target.value)}
          >
            <option value={true}>Completed</option>
            <option value={false}>Not Completed</option>
          </select>
          <br />
          <br />
          <div className="card-buttons">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => editTodo(element.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTodo(element.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

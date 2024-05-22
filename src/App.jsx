import React, { useState } from "react";
import Input from "./Components/Input";
import Card from "./Components/Card";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [editData, setEditData] = useState([]);
  const [filterTodo, setFilterTodo] = useState("All");
  const addOrEditTodo = (
    newTitle,
    newDescription,
    editIndex = null,
    status = false
  ) => {
    editIndex
      ? (setTodo(
          todo.map((ele) =>
            ele.id === editIndex
              ? { ...ele, title: newTitle, description: newDescription }
              : ele
          )
        ),
        setEditData([]))
      : setTodo([
          ...todo,
          {
            id: todo.length + 1,
            title: newTitle,
            description: newDescription,
            status: status,
          },
        ]);
  };

  const filteredTodos = todo.filter((ele) => {
    if (filterTodo === "All") return true;

    if (filterTodo === "Completed") return ele.status === "true";

    if (filterTodo === "Not Completed") return ele.status === false;
  });

  const handleStatusChange = (id, value) => {
    setTodo(
      todo.map((ele) => (ele.id === id ? { ...ele, status: value } : ele))
    );
  };
 console.log("vimal",todo);

  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setEditData(todo.filter((todo) => todo.id === id));
  };
  return (
    <div>
      <Input
        addOrEditTodo={addOrEditTodo}
        editData={editData}
        setFilterTodo={setFilterTodo}
        filterTodo={filterTodo}
      />

      <div className="card-container">
        {filteredTodos.map((element, index) => (
          <Card
            key={element.id}
            element={element}
            index={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            handleStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

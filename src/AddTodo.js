import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData, editData } from "./stores/slices/ReduxSlices";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState("");
  const [isEdit, setIsEdit] = useState(null);
  const [error, seterror] = useState("");
  const submitHandle = () => {
    if (isEdit !== null) {
      dispatch(editData(isEdit));
    } else {
      if (todoItem === "") {
        seterror("empty field");
      } else {
        dispatch(addData(todoItem));
        setTodoItem("");
        seterror("");
      }
    }
  };
  return (
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        name="todoItem"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      ></input>
      <div style={{ color: "red" }}>{error}</div>
      <button onClick={submitHandle}>
        {isEdit !== null ? "Update" : "Add"}
      </button>

    </div>
  );
};

export default AddTodo;

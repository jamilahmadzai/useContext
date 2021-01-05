import React from "react";
import { useGlobalContext } from "./context";

function GrocceryForm() {
  const { item, setItem, list, setList } = useGlobalContext();

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = item;
    setList([
      ...list,
      { id: Math.random().toString(36).substr(2, 9), itemDescription: newItem },
    ]);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter an item"
        name="item"
        value={item}
        onChange={handleChange}
      />
    </form>
  );
}

export default GrocceryForm;

import React from "react";
import { useGlobalContext } from "./context";

function GrocceryItem({ item }) {
  const { id, itemDescription } = item;
  const { list, setList } = useGlobalContext();

  const handleDelete = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
  };
  return (
    <div className="item-container">
      <li className="item">
        <p>{itemDescription}</p>
        <button className="btn-delete" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </li>
    </div>
  );
}

export default GrocceryItem;

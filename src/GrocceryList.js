import React from "react";
import { useGlobalContext } from "./context";
import GrocceryItem from "./GrocceryItem";

function GrocceryList() {
  const { list } = useGlobalContext();

  return (
    <div className="list-container">
      <ul className="list">
        {list.map((item) => {
          return <GrocceryItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default GrocceryList;

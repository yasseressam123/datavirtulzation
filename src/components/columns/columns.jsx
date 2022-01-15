import React, { useEffect, useState } from "react";
import axios from "axios";
import './columns.css';

const Columns = () => {
  const [columns, setColumns] = useState([]);
  const drag = (e)=>{
      console.log("drag", e.target.className);
    e.dataTransfer.setData("text", e.target.id);
  }
  useEffect(() => {
    axios
      .get(`https://plotter-task.herokuapp.com/columns`, {})
      .then((resp) => {
        console.log(resp.data);
        setColumns([...resp.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="columns">
      <div className="columns-title">
        <p>Columns</p>
      </div>
      <div>
      {columns?.map((column, index) => {
          return(
            <div
            key={index}
            type={column.function}
            draggable="true"
            onDragStart={drag}
            id={column.name}
          >
            <p>{column.name}</p>
          </div>
          )
      })}
      </div>
    </div>
  );
};
export default Columns;

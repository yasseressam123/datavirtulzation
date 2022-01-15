import React, { useEffect, useState } from "react";
import './userData.css';

const UserData = (props)=>{
    const [dimension , setDimension] = useState("");
    const [measures , setMeasures] = useState([]);
    const [reset,setReset] = useState(false);

    useEffect(()=>{
        props.handleData({ measures:[...measures],dimension:dimension},reset);
    },[dimension,measures])

    const allowDrop = (ev)=>{
        ev.preventDefault();
      }
    const dropDimension = (ev)=>{
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if(document.getElementById(data).getAttribute("type") === "dimension"){
            ev.target.appendChild(document.getElementById(data));
            setDimension(document.getElementById(data).getAttribute("id"));
        }
      }
      const dropMeasure = (ev)=>{
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if(document.getElementById(data).getAttribute("type") === "measure"){
            ev.target.appendChild(document.getElementById(data));
            setMeasures([...measures,document.getElementById(data).getAttribute("id")]);
        }
      }
      const removeDimension = ()=>{
            setDimension("");
            document.getElementById("dimension").innerHTML ="";
            setReset(true);
      }
      const removeMeasures = ()=>{
          setMeasures([]);
          document.getElementById("measures").innerHTML ="";
          setReset(true);
      }
    return(
        <div>
            <div className="input-container">
                <label htmlFor="">Dimension</label>
                <div className="input dimension" id="dimension" onDrop={dropDimension} onDragOver={allowDrop}></div>
                <button className="btn btn-primary" onClick={removeDimension}>clear</button>
            </div>
            <div className="input-container">
                <label htmlFor="">Measures</label>
                <div className="input" id="measures" onDrop={dropMeasure} onDragOver={allowDrop}></div>
                <button className="btn btn-primary" onClick={removeMeasures}>clear</button>
            </div>
        </div>
    )
}

export default UserData;
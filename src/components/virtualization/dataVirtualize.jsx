import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "primereact/chart";

const DataVirtualize = (props) => {
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState([]);
  useEffect(() => {
    axios
      .post("https://plotter-task.herokuapp.com/data", {
       ...props.data
      })
      .then((resp) => {
        console.log("yasser", resp.data);
        const res = resp.data;
        setLabels([...res[0].values]);
        if(res[2]){
            setDatasets([
                {
                label: res[1].name,
                fill: false,
                borderColor: "#42A5F5",
                yAxisID: "y",
                tension: 0.4,
                data: [...res[1].values],
              },{
                label: res[2].name,
                fill: false,
                borderColor: "#ff5200",
                yAxisID: "y1",
                tension: 0.4,
                data: [...res[2].values],
            }])
        }else{
            setDatasets([
                {
                    label: res[1].name,
                    fill: false,
                    borderColor: "#42A5F5",
                    yAxisID: "y",
                    tension: 0.4,
                    data: [...res[1].values],
                  },
            ]);
        }
        
      })
      .catch((error) => {
          console.log("error",error);
          setLabels([]);
          setDatasets([]);
      });
  }, [props]);

  
  const multiAxisData = {
    labels: [...labels],
    datasets: [
        ...datasets
    ],
  };
  let multiAxisOptions = {
    stacked: false,
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          color: "#495057",
        },
        grid: {
          drawOnChartArea: false,
          color: "#ebedef",
        },
      },
    },
  };

  return (
    <div>
      <Chart type="line" data={multiAxisData} options={multiAxisOptions} />
    </div>
  );
};

export default DataVirtualize;

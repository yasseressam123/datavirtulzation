import "./App.css";
import Columns from "./components/columns/columns";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Virtualization from './components/virtualization/virtualization';
import { useState } from 'react';


function App() {
  const [reset,setReset] = useState(false);
  const handleReset=(reset)=>{
    setReset(reset);
  }
  return (
    <div className="app">
      <div className="container">
          <div className="row">
            <div className="col-md-3 col-12">
              <Columns reset={reset}/>
            </div>
            <div className="col-md-9 col-12">
              <Virtualization handleReset={handleReset}/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;

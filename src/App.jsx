import "./App.css";
import Columns from "./components/columns/columns";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Virtualization from './components/virtualization/virtualization';

function App() {
  return (
    <div className="app">
      <div className="container">
        {/* <DragDropContext> */}
          <div className="row">
            <div className="col-md-3 col-12">
              <Columns />
            </div>
            <div className="col-md-9 col-12">
              <Virtualization/>
            </div>
          </div>
        {/* </DragDropContext> */}
      </div>
    </div>
  );
}

export default App;

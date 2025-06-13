import AppName from "./Components/AppName";
import Add from "./Components/AddToDo";
import Content1 from "./Components/Content1";
import Content2 from "./Components/Content2";
import "./App.css";

function App() {
  return (
    <center className="to-do-container">
      <AppName />
      <Add />
      <div className="item-container">
        <Content1 />
        <Content2 />
      </div>
    </center>
  )
}

export default App;
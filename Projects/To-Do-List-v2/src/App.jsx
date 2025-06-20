import AppName from "./Components/AppName";
import Add from "./Components/AddToDo";
import "./App.css";
import ToDoItems from "./Components/ToDoItems";

function App() {
  const Todoitems = [{
    name: 'Buy Milk',
    dueDate: '4/10/2025'
  },
  {
    name: 'Go To College',
    dueDate: '14/11/2025'
  },
  {
    name: 'Go On A Trip',
    dueDate: '05/11/2025'
  }
]
  return (
    <center className="to-do-container">
      <AppName />
      <Add />
      <ToDoItems Todoitems ={Todoitems}/>
    </center>
  )
}

export default App;
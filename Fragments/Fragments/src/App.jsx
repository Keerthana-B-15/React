import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Fooditems from './Components/Fooditems'
import ErrorMsg from './Components/Errormsg'

function App() {
  let HealthyFood = ['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk'];
  
//Ternary operator : let emptyMessage = HealthyFood.length === 0 ? <h3>I'm Still Hungry.</h3>:null;

  return (
    <>
      <h1>Healthy Food List</h1>
      <ErrorMsg items={HealthyFood} />
      <Fooditems items={HealthyFood} />
    </>
  );
}

export default App;

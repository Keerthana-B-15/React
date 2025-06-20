import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from './Components/Fooditems';
import ErrorMessgage from './Components/Errormsg';

function App() {

  let FoodItems = ['Dal','Green Vegetables','Roti', 'Salad', 'Milk']

  /*  1. if-else Condition
  if(FoodItems.length === 0){
    return <h3>I'm still Hungry.</h3>;
  }  */

  /*  2. Trnary Operator
  let EmptyMessgage = FoodItems.length === 0 ? <h3>I'm Still Hungry.</h3> : null;*/

  
  return (
    <>
      <h1 className="food-heading">Healthy Food List: </h1>
      {/* 3. EmptyMessgage*/}
      {/*Logical operator */}
      {/*FoodItems.length === 0 && <h3>I'm still hungry.</h3>*/}
      {/*<ul className="list-group">
        {FoodItems.map((item, index)=> <li className="list-group-item" key={index}>{item}</li> )}
      </ul>*/}
      <ErrorMessgage Foodlist= {FoodItems}/>
      <Fooditems Foodlist= {FoodItems}/>
    </>
  );
}

export default App;

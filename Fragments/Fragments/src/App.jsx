import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from './Components/Fooditems';
import ErrorMessgage from './Components/Errormsg';
import Container from './Components/Container';
import FoodInput from './Components/FoodInput';
import { useState } from 'react';

function App() {



  //let FoodItems = ['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk'];


  /*let textStateArr = useState("Food Items Entered By User");

  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];*/

  let [FoodItems, setFoodItems] =useState([]);



  const HandleOnKeyDown = (event) => {
    if(event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...FoodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(`New Food item added is ${newFoodItem}`);
    }
  }
  /*  1. if-else Condition
  if(FoodItems.length === 0){
    return <h3>I'm still Hungry.</h3>;
  }  */

  /*  2. Trnary Operator
  let EmptyMessgage = FoodItems.length === 0 ? <h3>I'm Still Hungry.</h3> : null;*/


  return (

    <>

      <Container>
        <h1 className="food-heading">Healthy Food List: </h1>
        {/* 3. EmptyMessgage*/}
        {/*Logical operator */}
        {/*FoodItems.length === 0 && <h3>I'm still hungry.</h3>*/}
        {/*<ul className="list-group">
          {FoodItems.map((item, index)=> <li className="list-group-item" key={index}>{item}</li> )}
        </ul>*/}

        <FoodInput HandleOnKeyDown={HandleOnKeyDown}/>
        <ErrorMessgage Foodlist={FoodItems} />
        {/*<p>{textToShow}</p>*/}
        <Fooditems Foodlist={FoodItems} />
      </Container>

      {/*<Container>
        <p>Above is the list of healthy foods that are good for your health and well being</p>
      </Container>*/}
    </>
  );
}

export default App

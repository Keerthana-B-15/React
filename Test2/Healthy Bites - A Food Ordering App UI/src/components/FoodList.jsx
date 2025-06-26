import Card from "./Card";
import Product from "./Product";
import LikeButton from "./LikeButton";
import AddToCartButton from "./AddToCartButton";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import styles from "./FoodList.module.css";

function FoodList({cartcount, setcartCount}) {
  const foodItems = [
    { name: "Fresh Salad", price: "₹49", image: p1 },
    { name: "Juice", price: "₹30", image: p2 },
    { name: "Tacos", price: "₹150", image: p3 },
    { name: "Ice Cream", price: "₹99", image: p4 }
  ];

  return (
    <div className={styles.container}>
      {foodItems.map((item, index) => (
        <Card key={index}>
          <Product name={item.name} price={item.price} image={item.image} />
          <LikeButton />
          <AddToCartButton cartcount={cartcount} setcartCount={setcartCount}/>
        </Card>
      ))}
    </div>
  );
}

export default FoodList;

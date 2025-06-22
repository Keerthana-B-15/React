import styles from "./Items.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function Item({ FoodItem, addToCart, handleAddToCartBtn }) {

   /* const alertOnClick = (event) => {
        console.log(event);
        alert(`${FoodItem} Added To Cart `);
    }*/


    return (
        <>
            <li className={` ${styles['k-item']} list-group-item ${addToCart && 'active'}`}> <span className={styles['k-span']}>{FoodItem}</span>
                <button type="button" className={`btn btn-primary  ${styles['button']}`} data-bs-toggle="button" onClick={handleAddToCartBtn}>Add To Cart</button>
            </li>
        </>
    )
}

export default Item;
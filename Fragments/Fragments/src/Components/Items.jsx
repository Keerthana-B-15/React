import styles from "./Items.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function Item({FoodItem}){
    return(
        <>
            <li className={` ${styles['k-item']} list-group-item`}> <span className={styles['k-span']}>{FoodItem}</span></li>
        </>
    )
}

export default Item;
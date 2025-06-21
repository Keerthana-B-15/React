import styles from './FoodInput.module.css'

function FoodInput(){
    return (
        <>
            <input type="text"  placeholder='Add Item' className={styles['input']}/>
        </>
    )
}

export default FoodInput
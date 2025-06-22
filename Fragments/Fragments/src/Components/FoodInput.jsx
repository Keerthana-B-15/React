import styles from './FoodInput.module.css'

function FoodInput(){
const HandleOnChange = (event) => {
    console.log(event.target.value)
}

    return (
        <>
            <input type="text"  placeholder='Add Item' className={styles['input']} onChange={HandleOnChange}/>
        </>
    )
}

export default FoodInput
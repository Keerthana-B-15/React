import styles from './FoodInput.module.css'

function FoodInput({HandleOnKeyDown}){
/*
    const HandleOnChange = (event) => {
    console.log(event.target.value)
}*/

    return (
        <>
            <input type="text"  placeholder='Add Item' className={styles['input']} onKeyDown={HandleOnKeyDown}/>
        </>
    )
}

export default FoodInput
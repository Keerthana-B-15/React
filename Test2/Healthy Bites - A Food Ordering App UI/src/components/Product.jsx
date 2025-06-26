import styles from "./Product.module.css"

function Product({name, price, image}){
    return (
        <>
            <img src={image} alt="Product Image" className={styles.image} />
            <h4>{name} - {price}</h4>
        </>
    )
}

export default Product
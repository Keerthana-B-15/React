import styles from "./Product.module.css"

function Product({title}){

    return (
        <>
            <h2>{title}</h2>
            <button onClick={() => alert(`${title} added to cart!`)} className={styles['button']}>Add To Cart</button>
        </>
    )
}

export default Product
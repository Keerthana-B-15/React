function AddToCartButton({cartcount, setcartCount}){

    const HandleCart = () => {
        setcartCount(cartcount + 1)
    }

    return (

        <>
            <button onClick={HandleCart}>Add To Cart</button>
        </>
    )
}

export default AddToCartButton
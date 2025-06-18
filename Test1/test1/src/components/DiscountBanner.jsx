function Discount(){
    let LoggedIn = true;
    return(
        <>
            {LoggedIn && <h1>Woooh, Special Discount just for you!!!</h1>}
        </>
    )
}

export default Discount
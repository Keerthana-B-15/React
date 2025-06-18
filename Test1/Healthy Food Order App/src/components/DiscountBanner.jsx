function DiscountBanner(){
    let LoggedIn = true;
    return(
        <>
            {LoggedIn && <h3>🎉 Special Discount Just for You!</h3>}

        </>
    )
}

export default DiscountBanner
function GreetMessage(){
    let date = new Date().getHours();
    return(
        <>
            {date < 12 ? <h1>Good Morning!</h1> : <h1>Good Evening!</h1>}
        </>
    )
}

export default GreetMessage
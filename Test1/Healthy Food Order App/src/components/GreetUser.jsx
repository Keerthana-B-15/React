function GreetUser({name}){
    let time = new Date().getHours()
    return(
        <>
            {time < 12 ? <h3>Good Morning {name}!</h3> : <h3>Good Evening {name}!</h3>}
        </>
    )
}

export default GreetUser
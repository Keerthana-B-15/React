function Random(){

    let number = Math.random()*100;
    return <h3 style={{'background-color':'#378969'}}>
        Random number i s: {Math.round(number)}</h3>
}

export default Random; 
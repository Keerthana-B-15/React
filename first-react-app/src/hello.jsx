function Hello(){

    let myName = "Keerthana";
    let fullName = ()=> {
        return 'Keerthana B';
    }

    return <h3>
        Hello, This is {fullName()}
    </h3>
}

export default Hello;
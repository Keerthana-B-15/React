function ClickCounter({HandleOnClick, count}){
    return (
        <>
            <button onClick={() => HandleOnClick()}>Like {count}</button> 
        </>
    )
}

export default ClickCounter
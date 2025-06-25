function RemoveItem({onRemove}){
    return(
        <>
            <button onClick={() => onRemove()}>Remove</button>
        </>
    )
}

export default RemoveItem
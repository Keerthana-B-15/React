function FoodList(){
    let Food = ['Dal','Rice','Salad','Pasta']
    return (
        <>
            <h1>Food List: </h1>
            <ul>
                {Food.map(function (item,index){
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </>
    )
}

export default FoodList
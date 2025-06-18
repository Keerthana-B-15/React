function FoodList(){
    let FoodList = ['Dal','Green Vegetables', 'Roti','Salad','Milk']
    return(
        <>
            <h3>Healthy Food List:</h3>
            <ul>
                {
                    FoodList.map(function (item,index){
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </>
    )
}

export default FoodList
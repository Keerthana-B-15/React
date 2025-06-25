import { useState } from "react"

function ItemLikeCounter({title, count1, HandleClickBtn}){

    const [likes, setlikes] = useState(0);

    const HandleLikes = () => {
        setlikes (likes+1);
    }

    return (
        <>
            <h5>{title} - Likes : {likes}</h5>
            <button onClick={() => HandleLikes()}>Like</button>
        </>
    )
}

export default ItemLikeCounter
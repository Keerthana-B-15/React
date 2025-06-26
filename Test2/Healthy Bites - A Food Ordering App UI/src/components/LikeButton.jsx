import { useState } from 'react'

function LikeButton(){

    const [likeCount, setLikeCount] = useState(0)

    const HandleLikeCount = () => {
        setLikeCount(likeCount + 1);
    }

    return (
        <>
            <button onClick={HandleLikeCount}>Like ❤️ {likeCount} </button>
        </>
    )
}

export default LikeButton

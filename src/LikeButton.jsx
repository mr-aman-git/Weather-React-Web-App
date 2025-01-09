import { useState } from "react"

export default function LikeButton(){
    let [isLike, setIsLike]= useState(false);
    let [count, setCount]= useState(0);
    let toggleLike=()=>{
        setIsLike(!isLike);
        setCount(!count);
    }
    let likeStyle={
        color:"red"
        
    }
    let imgStyle={
        height:"260px",
        width: "250px"
    }

    let paraStyle={
        fontSize:"30px",
    }
    return(
        <div>
            <img src="https://cdn.pixabay.com/photo/2024/06/28/14/02/hindu-god-8859577_640.jpg" style={imgStyle}/>
            <p onClick={toggleLike} style={paraStyle}>
                {
                    isLike ? (<i className="ri-heart-fill" style={likeStyle}></i>):
                    (<i  className="ri-heart-line"></i>)
                }
                {count+1}
                </p>
        </div>
    )
}
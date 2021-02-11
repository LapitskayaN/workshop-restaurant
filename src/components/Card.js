import React from "react";

const DEFAULT_IMAGE_FOOD = "https://sun9-46.userapi.com/impf/c854120/v854120805/f835b/HT9NhFozBJI.jpg?size=650x650&quality=96&proxy=1&sign=fd2205faae9483b3211d4e093ffc6342&c_uniq_tag=15QaM7yeNFaBWV0axbbAH1ebYUs4byLfZDnPvf65U8Y&type=album"
const DEFAULT_IMAGE_VEGAN = "https://www.crushpixel.com/big-static7/preview4/vegan-icon-142371.jpg"
const DEFAULT_IMAGE_STAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20KtQjC_q-wbE32dFXHK4w_rLdqh7F0SSBg&usqp=CAU"
const Card = (props) => {
    return (
        <div className="card">
            <img className="imgCard" src={props.foodImage === null ? DEFAULT_IMAGE_FOOD : props.foodImage} />
                     
            <div className="cardContent">
                <h2> {props.name}</h2>
                <p> {props.description}</p>
                <img className="imgVegan" src={props.isVegetarian ? DEFAULT_IMAGE_VEGAN : ' '} />
            </div>

            <div class="cardStar">
                <img className="imgStar" src={props.featured ? DEFAULT_IMAGE_STAR : ' '} />
              
            </div>
            <div class="cardPrice">
               
                <p> {props.price}</p>
            </div>
           
        </div>
    )
}

export default Card;
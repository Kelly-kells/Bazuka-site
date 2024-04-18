import React from 'react'
import "./items.css"
const Items = (props) => {
  return (
    <div className="items-container">
   <div className='items'>
        <div className="item-image">
        <img src={props.image} alt="" />
        </div>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="price">
                {props.price}
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
        .
    </div>

    </div>
   
  )
}

export default Items
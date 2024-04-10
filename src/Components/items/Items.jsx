import React from 'react'

const Items = (props) => {
  return (
    <div className='items'>
        <img src={props.image} alt="" />
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
  )
}

export default Items
import React from 'react'
import data from "../Components/Data"
import Items from '../Components/items/Items'

const Product = () => {
  return (
    <div className='products'>
      {data.map((items,i) => {
        return <Items key={i} id={items.id} name={items.name} image={items.Image} price={items.price} description={items.decription}/>


      })}
    </div>
  )
}

export default Product
import React from 'react'
import data from "../Components/Data"
import Items from '../Components/items/Items'

const Product = () => {
  return (
    <div className='products'>
      {data.map((Items,i) => {
        return <Items key={i} id={Items.id} name={items.name} image={items.image} price={Items.price}/>


      })}
    </div>
  )
}

export default Product
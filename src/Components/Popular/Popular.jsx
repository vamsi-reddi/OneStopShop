import React from 'react'
import Item from '../Item/Item'
import data from '../Assets/data'
import './Popular.css'
import p1_img from '../Assets/product_1.png'

const Popular = () => {
  return (
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data.map((item, index)=>{
                return (
                    <Item key = {index} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price={item.old_price}/>
                )
            })}
        </div>
    </div>
  )
}

export default Popular
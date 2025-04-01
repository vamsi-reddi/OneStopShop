import React from 'react'
import data from '../Assets/new_collections'
import Item from '../Item/Item'
import './Collections.css'

const Collections = () => {
  return (
    <div className="collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="new_collections-item">
            {data.map((item, index)=>{
                return (
                   <>
                    <Item key = {index} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price={item.old_price}/>
                   </>
                    
                )
            })}
        </div>
    </div>
  )
}

export default Collections
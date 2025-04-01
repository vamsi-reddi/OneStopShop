import React from 'react'
import offers_image from '../Assets/exclusive_image.png'
import './Offers.css'

const Offers = () => {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button onClick={()=>{}}>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={offers_image} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Offers
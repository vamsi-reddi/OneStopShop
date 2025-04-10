import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

  const {all_product, cart, removeFromCart} = useContext(ShopContext)

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Remove</p>
      </div>
      <hr/>
      <div className="cartitems-format">
        <img src="" alt="" className='carticon-propduct-icon'/>
        <p></p>
        <p></p>
        <button className='cartitems-quantity'></button>
        <p></p>
        <img src={remove_icon} onClick={()=>removeFromCart()} alt="" />
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cart[e.id] > 0){
          return 
        }
      })}
    </div>
  )
}

export default CartItems
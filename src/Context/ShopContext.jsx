import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState(getDefaultCart())

  const addToCart = (itemId)=>{
    setCart((prev)=> ({...prev, [itemId]: prev[itemId]+1}))

    console.log(cart)
  }

  const removeFromCart = (itemId)=>{
    setCart((prev)=> ({...prev, [itemId]: prev[itemId]-1}))
  }

  const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cart){
      if(cart[item]>0){
        let itemInfo = all_product.find((p)=>p.id === Number(item))
        totalAmount += itemInfo.new_price * cart[item];
      }
    }

    return totalAmount;
  }

  const getTotalCartItems = ()=>{
    let totalItems = 0;
    for(let item in cart) totalItems += cart[item]
    return totalItems
  }


  return (
    <ShopContext.Provider value={{ all_product, cart, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems}}>
      {children}
    </ShopContext.Provider>
  );
};

const getDefaultCart = ()=>{
  const cart = {}
  for(let i = 0; i < all_product.length; i++){
    cart[i] = 0;
  }
  return cart;
}

export default ShopContextProvider;

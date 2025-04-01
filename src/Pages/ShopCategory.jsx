import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = ({ category, banner_img }) => {
  const { all_product } = useContext(ShopContext);
  console.log("hi");
  console.log(all_product);
  return (
    <div className="shop-category">
      <div className="banner">
        <img src={banner_img} alt="" />
      </div>
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span>
            <span> out of 54 Products</span>
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-items">
          {all_product.map((item, i) => {
            if (item.category === category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else return null;
          })}
        </div>

        <div className="explore-more">
         Explore More
        </div>

    </div>
  );
};

export default ShopCategory;

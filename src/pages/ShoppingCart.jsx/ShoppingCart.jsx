import React from "react"

import {FaPlus, FaMinus, FaTimes} from "react-icons/fa";
// import img1 from "../assets/sm-img.png";
// import img2 from "../assets/sm1-img.png"
import { Button } from "../../components/Button";
import { useCartStore } from "../../store/cart";
import { Link } from "react-router-dom";
import "./ShoppingCart.css"

export const ShoppingCart =()=>{
    const {cartItems, updateCartItem, removeCartItem} = useCartStore()

    const handleUpdateCartItem = (id, quantity) => {
        updateCartItem(id, {quantity})
    }

    //delete item 

    const handleRemoveCartItem = (id) => {
        removeCartItem(id);
      };

    // Calculate totals
  const subtotal = cartItems?.reduce(
    (acc, item) =>
      acc + item?.current_price?.[0]?.USD?.[1] * item?.quantity,
    0
  );

  const grandTotal = subtotal;


    return(
        <section>
    <div className="shopping-cart container"> 
        <h2 className="shopping-cart__title">My shopping cart</h2>
        <p className="shopping-cart__text">
        You have {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
<div class="table-container">
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>Items</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cartItems?.map((cartItem) => (
                    <tr>
                    <td data-label="Select"><input type="checkbox" /></td>
                    <td data-label="Items">
                        {/* <div> */}
                            <img  style={{width: "100px"}} src={`https://api.timbu.cloud/images/${cartItem?.photos[0].url}`} alt={cartItem?.name}/>
                        {/* </div> */}
                    </td>
                    <td data-label="Description">
                        <div><h4>{cartItem?.name}</h4></div>
                        <div><span>Black</span>, <span>Medium</span></div>

                    </td>
                    <td data-label="Price">${cartItem?.current_price?.[0]?.USD?.[1]}</td>
                    <td data-label="Quantity">
                    <div className="shopping-cart__counter">
                        <FaPlus onClick={() => handleUpdateCartItem(cartItem?.id,cartItem?.quantity +1 )} />
                         <span>{cartItem?.quantity}</span>
                        <FaMinus  onClick={() => handleUpdateCartItem(cartItem?.id,cartItem?.quantity -1 )} className={`${cartItem?.quantity <=1? "disable" : ""} `} />

                     </div>
                    </td>
                    <td data-label="Total">${(cartItem?.current_price?.[0]?.USD?.[1] * cartItem?.quantity).toFixed(2)}   </td>
                    <td style={{color: "red", cursor: "pointer"}}  onClick={() => handleRemoveCartItem(cartItem?.id)}><FaTimes/></td>
                </tr>
                ))}
                
               
            </tbody>
            <tfoot>
                {/* <tr>
                    <td colspan="5" data-label="Subtotal">Subtotal</td>
                    <td data-label="Subtotal Amount">${subtotal.toFixed(2)}</td>
                    
                </tr> */}
                {/* <tr>
                    <td colspan="5" data-label="Discount">Discount</td>
                    <td data-label="Discount Amount">-$5.00</td>
                </tr> */}
                <tr>
                    <td colspan="5" data-label="Grand Total">Grand Total</td>
                    <td data-label="Grand Total Amount">${grandTotal.toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>
    </div>
    <div class="checkout-container">
        {/* <button class="checkout-btn">Checkout</button> */}
        <Link to="/payment">
        <Button  text="Proceed to Checkout" className="btn-bg"/>
        </Link>
        <Button text="Countinue shopping" className="btn-br"/>
    </div>
    </div>
    </section>
)
}
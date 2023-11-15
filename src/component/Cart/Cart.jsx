import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 7 / 100;
    const grandtotal = total + tax + totalShipping;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Shipping: {totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}
            </p>
            <h4>Grand Total: {grandtotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;
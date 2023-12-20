import React, { useEffect, useContext } from 'react'
import { ShopContext } from '../context'

const Cart = () => {
  const { order, handleBasketShow = Function.prototype} = useContext(ShopContext)
  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="medium material-icons">shopping_cart</i>
      {order.length ? (
        <span className="cart-quantity">{order.length}</span>
      ) : null}
    </div>
  )
}

export default Cart

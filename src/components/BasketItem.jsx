import React, { useContext } from 'react'
import { ShopContext } from '../context'

const BasketItem = ({
  id,
  name,
  price,
  quantity,
 
}) => {
  const { removeFromBascet, decQuantity, incQuantity } =
    useContext(ShopContext)
 
  return (
    <li className="collection-item ">
      {name}{' '}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(id)}
      >
        remove
      </i>{' '}
      x{quantity}{' '}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add
      </i>{' '}
      = {price * quantity}
      <span
        className="secondary-content"
        onClick={() => removeFromBascet(id)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  )
}

export default BasketItem

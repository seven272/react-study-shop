import React, { useContext } from 'react'
import { ShopContext } from '../context'
import BasketItem from './BasketItem'

const BasketList = () => {
  const { handleBasketShow, order = [] } = useContext(ShopContext)

  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price * elem.quantity
  }, 0)
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => {
          return <BasketItem key={item.id} {...item} />
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}

      <li className="collection-item active">
        Общая стоимоть: {totalPrice} rub.
      </li>
      <li className="collection-item ">
        <button className=" btn">Оформить</button>
      </li>
      <i
        className="material-icons basket-close"
        onClick={handleBasketShow}
      >
        close
      </i>
    </ul>
  )
}

export default BasketList

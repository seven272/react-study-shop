import React, {useContext} from 'react'
import { ShopContext } from '../context'

const GoodItem = (props) => {
  const { id, name, description, price, image } = props

  const {addToBasket} = useContext(ShopContext)
  
  const addNewGood = () => {
    const newObj = {
      id,
      name,
      price,
    }
    addToBasket(newObj)
  }

 
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={addNewGood}>
          Купить
        </button>
        <span
          className="right"
          style={{ fontSize: '24px', fontWeight: 'bold' }}
        >
          {price} rub.
        </span>
      </div>
    </div>
  )
}

export default GoodItem

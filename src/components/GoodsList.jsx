import React, {useContext} from 'react'
import GoodItem from './GoodItem'

import { ShopContext } from '../context'

const GoodsList = () => {
  const {goods = []} = useContext(ShopContext)

  if (!goods.length) {
    return <h3>Ничего нет. Список пуст</h3>
  }
  return (
    <div className='goods'>
      {goods.map((good) => (
        <GoodItem key={good.id} {...good} />
      ))}
    </div>
  )
}

export default GoodsList

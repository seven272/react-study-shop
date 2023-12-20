import React, { useState, useEffect, useContext } from 'react'

import { ShopContext } from '../context.js'
import { API_URL, API_KEY } from '../config.js'
import Preloader from './Preloader.jsx'
import GoodsList from './GoodsList.jsx'
import Cart from './Cart.jsx'
import BasketList from './BasketList.jsx'
import Alert from './Alert.jsx'

const Shop = () => {
  const {setGoods, loading, order, isBasketShow, alertName} = useContext(ShopContext)



  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured)
      })
  }, [])

  return (
    <main className="container content">
      <Cart
        quantity={order.length}
        
      />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList />
      )}
      {isBasketShow && (
        <BasketList
         
        />
      )}
      {alertName && (
        <Alert />
      )}
    </main>
  )
}

export default Shop

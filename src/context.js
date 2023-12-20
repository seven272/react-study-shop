import { createContext, useReducer } from 'react'
import { reducer } from './reducer'

export const ShopContext = createContext()

const initialState = {
  goods: [],
  order: [],
  isBasketShow: false,
  loading: true,
  alertName: '',
}

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASCET', payload: item })
  }

  value.incQuantity = (itemId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: {id: itemId} })
  }

  value.decQuantity = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: {id: itemId} })
  }

  value.handleBasketShow = () => {
    dispatch({type: 'TOGGLE_BASKET'})
  }

  value.removeFromBascet = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASCET', payload: { id: itemId } })
  }

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data || [] })
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

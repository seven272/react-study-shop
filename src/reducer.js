const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_GOODS': return {
      ...state,
      goods: payload,
      loading: false
    }
    case 'ADD_TO_BASCET': {
      const itemIndex = state.order.findIndex(
        (elem) => elem.id === payload.id
      )
      let newOrder = null

      if (itemIndex < 0) {
        const nextItem = {
          ...payload,
          quantity: 1,
        }
        newOrder = [...state.order, nextItem]
      } else {
        newOrder = state.order.map((elem, inx) => {
          if (inx === itemIndex) {
            return {
              ...elem,
              quantity: elem.quantity + 1,
            }
          } else {
            return elem
          }
        })
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      }
    }

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map((elem) => {
          if (elem.id === payload.id) {
            const newQuantity = (elem.quantity += 1)
            return {
              ...elem,
              quantity: newQuantity,
            }
          }
          return elem
        }),
      }

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map((elem) => {
          if (elem.id === payload.id && elem.quantity > 0) {
            const newQuantity = (elem.quantity -= 1)
            return {
              ...elem,
              quantity: newQuantity,
            }
          }
          return elem
        }),
      }

    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      }

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      }

    case 'REMOVE_FROM_BASCET':
      return {
        ...state,
        order: state.order.filter((elem) => elem.id !== payload.id),
      }

    default:
      return state
  }
}

export { reducer }

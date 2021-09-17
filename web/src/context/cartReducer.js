const initialState = []

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("localCart")) || initialValue

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.item, quantity: action.quantity }]

    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.item.id)

    case "DECREASE_QUANTITY":
      return state.find(item => item.id === action.item.id)?.quantity === 1
        ? state.filter(item => item.id !== action.item.id)
        : state.map(item =>
            item.id === action.item.id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          )

    case "INCREASE_QUANTITY":
      return state.map(item =>
        item.id === action.item.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )

    case "CLEAR_CART":
      return initialState

    default:
      return state
  }
}

export const addToCart = (item, quantity) => ({
  type: "ADD_TO_CART",
  item,
  quantity,
})

export const decrease = item => ({
  type: "DECREASE_QUANTITY",
  item,
})

export const increase = item => ({
  type: "INCREASE_QUANTITY",
  item,
})

export const removeFromCart = item => ({
  type: "REMOVE_FROM_CART",
  item,
})

export const clearCart = () => ({
  type: "CLEAR_CART",
})

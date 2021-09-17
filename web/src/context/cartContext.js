import React, { createContext, useEffect, useReducer } from "react"
import { cartReducer, initializer } from "./cartReducer"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], initializer)

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

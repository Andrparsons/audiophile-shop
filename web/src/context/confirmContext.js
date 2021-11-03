import React, { createContext, useState } from "react"

export const ConfirmContext = createContext()

export const ConfirmProvider = ({ children }) => {
  const [confirmOpen, setConfirmOpen] = useState(false)

  return (
    <ConfirmContext.Provider value={[confirmOpen, setConfirmOpen]}>
      {children}
    </ConfirmContext.Provider>
  )
}

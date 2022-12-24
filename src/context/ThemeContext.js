import { createContext, useReducer } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  
  
  return (
    <ThemeContext.Provider value={{ color: "#f8ae00" }}>
      {children}
    </ThemeContext.Provider>
  )
}
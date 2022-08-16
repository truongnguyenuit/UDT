import React from 'react'
import { createContext, useReducer } from "react";
import { Reducer1 } from "../reducers/Reducer1";

export const Context1 = createContext()

const ContextProvider1 = ({ children }) => {

  const [State, dispatch] = useReducer(Reducer1, {
    state1: "",
    state2: ""
  })

  const function1 = () => {
    dispatch({ type: "type1", payload: 1 })
  }
  const function2 = () => {
    dispatch({ type: "type2", payload: 2 })
  }

  const Context1Data = { function1, function2 }

  return (
    <Context1.Provider value={Context1Data}>
      {children}
    </Context1.Provider>
  )
}
export default ContextProvider1
import React from 'react'
import { createContext, useReducer } from "react";
import { Reducer2 } from "../reducers/Reducer2";

export const Context2 = createContext()

const ContextProvider2 = ({ children }) => {

  const [State, dispatch] = useReducer(Reducer2, {
    state1: "",
    state2: ""
  })

  const function1 = () => {
    dispatch({ type: "type1", payload: 1 })
  }
  const function2 = () => {
    dispatch({ type: "type2", payload: 2 })
  }

  const Context2Data = { function1, function2 }

  return (
    <Context2.Provider value={Context2Data}>
      {children}
    </Context2.Provider>
  )
}
export default ContextProvider2
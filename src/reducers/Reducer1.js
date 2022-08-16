import React from 'react'
export const Reducer1 = (state, action) => {
  
  const { type, payload } = action
  
  switch (type) {
    case 'type1': 
    {
      return {
        ...state,
        state1: payload.state1,
        state2: payload.state2,
      }
    }
    case 'type2': 
    {
      return {
        ...state,
        state1: payload.state1,
        state2: payload.state2,
      }
    }
    default: 
    {
      return state
    }
  }
  
}


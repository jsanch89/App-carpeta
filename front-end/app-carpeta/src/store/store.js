import React, { createContext, useReducer } from "react";
import validationReducer from './reducer/user_validation-reducer'


const initialState = {
  idNumber: undefined,
  isValid: false,
  isAuth: false,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(validationReducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};

export const Context = createContext(initialState);
export default Store;
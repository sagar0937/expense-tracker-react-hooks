import React, { createContext, useReducer } from "react";
import { IncExpReducer } from "./IncExpReducer";

// Initial state
const initialState = {
  transactions: [],
};
//create context
export const IncExpContext = createContext();

// Provider component
const IncomeExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(IncExpReducer, initialState);
  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <IncExpContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </IncExpContext.Provider>
  );
};

export default IncomeExpenseProvider;

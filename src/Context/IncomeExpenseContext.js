import React, { createContext, useReducer } from "react";
import { IncExpReducer } from "./IncExpReducer";

//create context
export const IncExpContext = createContext();

// Provider component
const IncomeExpenseProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(IncExpReducer, [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ]);
  return (
    <IncExpContext.Provider value={{ transactions, dispatch }}>
      {children}
    </IncExpContext.Provider>
  );
};

export default IncomeExpenseProvider;

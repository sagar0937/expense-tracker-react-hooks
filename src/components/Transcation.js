import React, { useContext } from "react";
import { IncExpContext } from "../Context/IncomeExpenseContext";

const Transcation = ({ transaction }) => {
  const { deleteTransaction } = useContext(IncExpContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          ${sign}
          {Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className='delete-btn'>
          x
        </button>
      </li>
    </>
  );
};

export default Transcation;

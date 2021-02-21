import React, { useContext } from "react";
import { IncExpContext } from "../Context/IncomeExpenseContext";
import Transcation from "./Transcation";

const TranscationList = () => {
  const { transactions } = useContext(IncExpContext);
  return (
    <>
      <h3>
        <ul className='list'>
          {transactions.map((transaction) => (
            <Transcation key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </h3>
    </>
  );
};

export default TranscationList;

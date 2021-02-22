import React, { useState, useContext } from "react";

import { IncExpContext } from "../Context/IncomeExpenseContext";

const AddTranscation = () => {
  const [memo, setMemo] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(IncExpContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      memo,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setMemo("");
    setAmount("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={memo}
            onChange={(e) => {
              setMemo(e.target.value);
            }}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTranscation;

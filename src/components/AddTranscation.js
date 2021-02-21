import React, { useState } from "react";

const AddTranscation = () => {
  const [memo, setMemo] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMemo("");
    setAmount("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
          </label>
          <input type='number' placeholder='Enter amount...' />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTranscation;

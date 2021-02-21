import React from "react";

const Transcation = ({ transaction }) => {
  return (
    <>
      <li className='minus'>
        Cash <span>-${transaction.amount}</span>
        <button className='delete-btn'>x</button>
      </li>
    </>
  );
};

export default Transcation;

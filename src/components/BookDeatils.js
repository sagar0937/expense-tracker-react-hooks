import React, { useState, useContext } from "react";
import { bookContext } from "../Context/bookContext";

const BookDeatils = ({ book }) => {
  const { books, addbook, removeBook } = useContext(bookContext);

  return (
    <>
      <li onClick={() => removeBook(book.id)}>
        <div>{book.title}</div>
        <div>{book.author}</div>
      </li>
    </>
  );
};

export default BookDeatils;

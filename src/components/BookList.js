import React, { useContext } from "react";
import { bookContext } from "../Context/bookContext";
import BookDeatils from "./BookDeatils";

const BookList = () => {
  const { books } = useContext(bookContext);
  console.log("books", books);
  return (
    <>
      <ul>
        {books.map((book) => (
          <BookDeatils key={book.id} book={book} />
        ))}
      </ul>
    </>
  );
};

export default BookList;

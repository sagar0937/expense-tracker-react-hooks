import React, { useState, createContext } from "react";

export const bookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      title: "immortals of meluha",
      author: "AMish",
      id: Math.floor(Math.random() * 1000) + 1,
    },
    {
      title: "immortals of Nagas",
      author: "Amish Tripata",
      id: Math.floor(Math.random() * 1000) + 1,
    },
  ]);

  const addBookA = (title, author) => {
    setBooks([
      ...books,
      {
        title,
        author,
        id: Math.floor(Math.random() * 1000 + 1),
      },
    ]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <div>
      <bookContext.Provider value={{ books, addBookA, removeBook }}>
        {children}
      </bookContext.Provider>
    </div>
  );
};

export default BookContextProvider;

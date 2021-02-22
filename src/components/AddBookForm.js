import React, { useState, useContext } from "react";
import { bookContext } from "../Context/bookContext";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const { addBookA } = useContext(bookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBookA(title, author);

    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <input
          type='text'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder='Enter title...'
        />
      </div>
      <div className='form-control'>
        <input
          type='text'
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          placeholder='Enter Author...'
        />
      </div>
      <button className='btn'>Add </button>
    </form>
  );
};

export default AddBookForm;

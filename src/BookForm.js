import React, { useState } from "react";

const BookForm = (props) => {
  const [Title, setTitle] = useState(
    props.book ? props.book.title : ""
  );
  const [Author, setAuthor] = useState(
    props.book ? props.book.author : ""
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log({ Title, Author });
    // addUser....

    if (props.book) {
      props.updateBook({
        isbn: props.book.isbn,
        title: Title,
        author: Author,
      });
    } else {
      props.x({
        isbn: Math.random(),
        title: Title,
        author: Author,
      });
    }
  };
  return (
    <div>
      <h1>{props.book ? "Edit" : "New"} Form</h1>

      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p>Author</p>
        <input
          value={Author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <button type="submit">{props.book ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default BookForm;
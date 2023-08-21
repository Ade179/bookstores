import React from 'react';

const AddBookForm = () => (
  <div className="add-book-form">
    <h2>Add a Book</h2>
    <form>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default AddBookForm;

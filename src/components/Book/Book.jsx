import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="book">
    <h2>{title}</h2>
    <p>
      Author:
      {author}
    </p>
    <button type="submit">Remove</button>
  </div>
);

export default Book;

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,

};

// Define default values
Book.defaultProps = {
  title: 'Unknown Title',
  author: 'Unknown Author',
};

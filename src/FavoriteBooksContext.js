import React, { createContext, useContext, useState } from 'react';

const FavoriteBooksContext = createContext();

export const useFavoriteBooks = () => {
  return useContext(FavoriteBooksContext);
};

export const FavoriteBooksProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const addFavoriteBook = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };

  const removeFavoriteBook = (bookId) => {
    setFavoriteBooks(favoriteBooks.filter(book => book.id !== bookId));
  };

  const isBookFavorite = (bookId) => {
    return favoriteBooks.some(book => book.id === bookId);
  };

  return (
    <FavoriteBooksContext.Provider
      value={{
        favoriteBooks,
        addFavoriteBook,
        removeFavoriteBook,
        isBookFavorite
      }}
    >
      {children}
    </FavoriteBooksContext.Provider>
  );
};

export default FavoriteBooksContext;

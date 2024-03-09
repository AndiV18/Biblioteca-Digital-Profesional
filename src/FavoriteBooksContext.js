import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoriteBooksContext = createContext();

export const useFavoriteBooks = () => {
  return useContext(FavoriteBooksContext);
};

export const FavoriteBooksProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState(() => {
    const storedFavoriteBooks = localStorage.getItem('favoriteBooks');
    return storedFavoriteBooks ? JSON.parse(storedFavoriteBooks) : [];
  });

  const addFavoriteBook = (book) => {
    const updatedFavoriteBooks = [...favoriteBooks, book];
    setFavoriteBooks(updatedFavoriteBooks);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavoriteBooks));
  };

  const removeFavoriteBook = (bookId) => {
    const updatedFavoriteBooks = favoriteBooks.filter(book => book.id !== bookId);
    setFavoriteBooks(updatedFavoriteBooks);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavoriteBooks));
  };

  const addCommentToBook = (bookId, comment) => {
    const updatedFavoriteBooks = favoriteBooks.map(book =>
      book.id === bookId ? { ...book, comment } : book
    );
    setFavoriteBooks(updatedFavoriteBooks);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavoriteBooks));
  };

  const removeCommentFromBook = (bookId) => {
    const updatedFavoriteBooks = favoriteBooks.map(book =>
      book.id === bookId ? { ...book, comment: "" } : book
    );
    setFavoriteBooks(updatedFavoriteBooks);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavoriteBooks));
  };

  const isBookFavorite = (bookId) => {
    return favoriteBooks.some(book => book.id === bookId);
  };

  useEffect(() => {
    localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
  }, [favoriteBooks]);

  return (
    <FavoriteBooksContext.Provider
      value={{
        favoriteBooks,
        addFavoriteBook,
        removeFavoriteBook,
        addCommentToBook,
        removeCommentFromBook,
        isBookFavorite
      }}
    >
      {children}
    </FavoriteBooksContext.Provider>
  );
};

export default FavoriteBooksContext;

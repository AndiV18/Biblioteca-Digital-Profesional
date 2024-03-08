import React from 'react';
import { useFavoriteBooks } from '../../FavoriteBooksContext';

const Biblioteca = () => {
  const { favoriteBooks } = useFavoriteBooks();

  return (
    <div>
      <h2>Libros Favoritos</h2>
      <ul>
        {favoriteBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Biblioteca;

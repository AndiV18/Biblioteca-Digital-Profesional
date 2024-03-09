import React from 'react';
import { useFavoriteBooks } from '../../FavoriteBooksContext';
import "./Biblioteca.css";

const Biblioteca = () => {
  const { favoriteBooks, removeFavoriteBook } = useFavoriteBooks();

  const handleRemoveFromFavorites = (bookId) => {
    removeFavoriteBook(bookId);
  };

  return (
    <div className="biblioteca">
      <h2 className="biblioteca-title">Libros Favoritos</h2>
      <div className="book-list">
        {favoriteBooks.map((book) => (
          <div key={book.id} className="book-item">
            <img src={book.cover_img} alt={book.title} className="book-cover" />
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author"><span className="label">Autor:</span> {book.author}</p>
              <p className="book-edition"><span className="label">Número de ediciones:</span> {book.edition_count}</p>
              <p className="book-publish-year"><span className="label">Año de publicación:</span> {book.first_publish_year}</p>
              <button onClick={() => handleRemoveFromFavorites(book.id)}>Quitar de favoritos</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Biblioteca;

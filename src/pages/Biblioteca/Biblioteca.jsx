import React, { useState, useEffect } from 'react';
import { useFavoriteBooks } from '../../FavoriteBooksContext';
import "./Biblioteca.css";

const Biblioteca = () => {
  const { favoriteBooks, removeFavoriteBook, addCommentToBook } = useFavoriteBooks();
  const [comment, setComment] = useState("");

  useEffect(() => {
    localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
  }, [favoriteBooks]);

  const handleRemoveFromFavorites = (bookId) => {
    removeFavoriteBook(bookId);
  };

  const handleAddComment = (bookId) => {
    addCommentToBook(bookId, comment);
    setComment(""); // Limpiar el campo de comentarios después de agregar el comentario
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
              {/* Mostrar comentarios */}
              {book.comment && (
                <div className="book-comment">
                  <span className="label">Comentario:</span> {book.comment}
                </div>
              )}
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Añadir comentario"
                className="comment-input"
              />
              <button onClick={() => handleAddComment(book.id)}>Guardar comentario</button>
              <button onClick={() => handleRemoveFromFavorites(book.id)}>Quitar de favoritos</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Biblioteca;

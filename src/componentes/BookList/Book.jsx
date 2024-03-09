import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useFavoriteBooks } from '../../FavoriteBooksContext';
import "./BookList.css";

const Book = (book) => {

  const { addFavoriteBook, removeFavoriteBook, isBookFavorite } = useFavoriteBooks();

  const handleToggleFavorite = () => {
    if (isBookFavorite(book.id)) {
      removeFavoriteBook(book.id);
    } else {
      addFavoriteBook(book);
    }
  };

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Autor: </span>
          <span>{book.author}</span>
        </div>
        

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Numero de ediciones: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Año de publicacion: </span>
          <span>{book.first_publish_year}</span>
        </div>
        <div className='book-item-info-item add-to-favorites'>
          <button onClick={handleToggleFavorite}>
            {isBookFavorite(book.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Book

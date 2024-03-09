import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Encuentra tu libro favorito.</h2><br />
                <p className='header-text fs-18 fw-3'>Ten un registro de tus libros favoritos o libros que ya leiste con la biblioteca digital.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header
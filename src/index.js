import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppProvider } from './context';
import { FavoriteBooksProvider } from './FavoriteBooksContext';
import './index.css';
import Home from './pages/Home/Home';
import Autores from './pages/Autores/Autores';
import Biblioteca from './pages/Biblioteca/Biblioteca';
import BookList from './componentes/BookList/BookList';
import BookDetails from './componentes/BookDetails/BookDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FavoriteBooksProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />}>
            <Route path = "autores" element = {<Autores/>}/>
            <Route path = "biblioteca" elment = {<Biblioteca/>}/>
            <Route path = "book" element = {<BookList />}/>
            <Route path = "/book/:id" element = {<BookDetails />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </FavoriteBooksProvider>
  </AppProvider>
);



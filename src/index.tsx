import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './reset.css';
import App from './App';
import Movie from './detalhes/Movie';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/detalhes/:id' element={<Movie />}/>
    </Routes>
  </Router>
);
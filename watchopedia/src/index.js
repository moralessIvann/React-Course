import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Counter from './component/Counter';
import MoviePage from './movieComponets/MoviePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <div className="p-2 m-2 row text-center">
      <Counter/>
      <MoviePage/>
    </div>
    
  </React.StrictMode>
);

import React from 'react';
import './App.css';
import Header from './components/Header';
import AnimeForm from './components/AnimeForm';
import AnimeList from './components/AnimeList';

function App() {
  return (
    <div className="App">
      <Header />
      <AnimeForm />
      <AnimeList />
    </div>
  );
}

export default App;

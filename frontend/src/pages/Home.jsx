import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Notepad from './Notepad';

const Home = () => {
  return (
    <div className="App">
      <Sidebar /> {/* Sidebar */}
      <Header />  {/* Header */}
      <div className="content">
      </div>
    </div>
  )
}

export default Home
import {Route,Router,Routes,Link} from 'react-router'
import { useState } from 'react'
import Home from './pages/Home'
import '../src/css File/App.css'
import Notepad from './pages/Notepad'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MenuTile from './components/MenuTitle'
import Login from './components/Login'
import Signup from './components/Signup'
import MaterialList from './components/MaterialList'

function App() {

  const materials = [
    {
      name: "Tomatoes",
      image: "https://via.placeholder.com/80", // Replace with actual image
      required: 10,
      available: 6,
    },
    {
      name: "Cheese",
      image: "https://via.placeholder.com/80",
      required: 5,
      available: 2,
    },
    {
      name: "Bread",
      image: "https://via.placeholder.com/80",
      required: 8,
      available: 8,
    },
  ];

  return (
      <div className='App'>
        <Sidebar/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/menu' element={<MenuTile/>}/>
          <Route path='/notepad' element={<Notepad/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          {/* <Route path='/materiallist' element={<MaterialList />}/> */}
        </Routes>
        <div className='content'>
          
        </div>
      </div>
  )
}

export default App

import React from 'react';
import '../css File/Sidebar.css'; // Optional for styling

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/notepad">notepad</a></li>
        <li><a href="/materiallist">MaterialList</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
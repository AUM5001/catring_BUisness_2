import React from 'react'
import { useState } from 'react';
import '../css File/Notepad.css'

const Notepad = () => {
    const [text, setText] = useState('');
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    const handleSave = () => {
      // Here you can save the content to localStorage or handle saving as needed.
      localStorage.setItem('notepadContent', text);
      alert('Note saved!');
    };
  
    const handleLoad = () => {
      const savedText = localStorage.getItem('notepadContent');
      if (savedText) {
        setText(savedText);
      } else {
        alert('No saved notes found!');
      }
    };
  
    return (
      <div style={{ padding: '20px' }} className='notepad'>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Write your notes here..."
          rows="10"
          cols="50"
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <div>
          <button onClick={handleSave} style={{ marginRight: '10px' }}>Save</button>
          <button onClick={handleLoad}>Load</button>
        </div>
      </div>
    );
  };
  
  export default Notepad;
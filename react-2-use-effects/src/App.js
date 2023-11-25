import React, { useState } from 'react'
import './App.css';


function App() {
  const [text, setText] = useState('')

  function changeHandler(event) {
    console.log(text)
    setText(event.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;
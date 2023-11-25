import React, { useEffect, useState } from 'react'
import './App.css';


function App() {
  const [text, setText] = useState('')

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  // Variation1 - Every Render 
  // useEffect(() => {
  //   console.log("UI Renderer changed")
  // });

  // Variation2 - First Render
  useEffect(() => {
    console.log("UI Renderer changed");
  },[]);

 

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;

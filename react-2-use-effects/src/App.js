import React, { useEffect, useState } from 'react'
import './App.css';


function App() {
  const [text, setText] = useState('')
  const [name, setName] = useState('Pinkoo')

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  // Variation1 - Every Render 
  // useEffect(() => {
  //   console.log("UI Renderer changed")
  // });

  // Variation2 - First Render
  // useEffect(() => {
  //   console.log("UI Renderer changed");
  // },[]);

  // Variation3 - On First Render + Whenever Dependencies CHanges
  useEffect(() => {
    console.log("UI Renderer changed");
  }, [name]);

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;

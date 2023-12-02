import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
  const navigate = useNavigate();

  function clickHandler() {
    // Move to ALabs Page
    navigate("/about")
  }

  return (
    <div>
      <div>This is Support Page</div>
      <button onClick={clickHandler} >Move to Labs Page</button>
    </div>
  )
}

export default Support
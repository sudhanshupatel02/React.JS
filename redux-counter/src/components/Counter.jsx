import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

    //! kisi slice ke ander se data lana hai {useSelector}Hooks ka use karte hai 
    const count = useSelector((state) => state.counter.value ); 
    const dispatch = useDispatch();  //!Increment,Decrement ka use {useDispatch}Hooks ka use harte hai

  return (
    <div>
      <button
      onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <br/>
      <br/>

      <div>{count}</div>

      <br/>
      <br/>

      <button
      onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter

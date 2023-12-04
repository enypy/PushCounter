import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1>PushCounter</h1>
      <div className="counter">
        <div className="btn-container">
          <button type="button" className="btn decrement" onClick={() => dispatch(decrement())}>-</button>
          <div className="count">{count}</div>
          <button type="button" className="btn increment" onClick={() => dispatch(increment())}>+</button>
        </div>
        <button type="button" className="btn reset" onClick={() => dispatch(reset())}>reset</button>
      </div>
      <div className="counter-bg"></div>
    </>
  )
}

export default App

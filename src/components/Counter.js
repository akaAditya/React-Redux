import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementby2, incrementby2 } from '../store/counterSlice'
import classes from './Counter.module.css'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <main className={classes.counter}>
       <h1>Redux Counter</h1>
       <div className={classes.value}>{count}</div>
       <button onClick={() => dispatch(decrementby2())}>Decrement</button>
       <button onClick={() => dispatch(incrementby2())}>Increment</button>
     </main>
    </div>
  )
}
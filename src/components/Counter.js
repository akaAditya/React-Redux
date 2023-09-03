import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementby2,
  decrementby5,
  increase,
  incrementby2,
  incrementby5,
  toggle,
} from "../store/counterSlice";
import classes from "./Counter.module.css";

export default function Counter() {
  const count = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{count}</div>
        <div>
          <button onClick={() => dispatch(decrementby2())}>Decrement-2</button>
          <button onClick={() => dispatch(incrementby2())}>Increment-2</button>
        </div>
        <div>
          <button onClick={() => dispatch(decrementby5())}>Decrement-5</button>
          <button onClick={() => dispatch(incrementby5())}>Increment-5</button>
        </div>
        <div>
          <button onClick={() => dispatch(increase(10))}>
            Increase Counter
          </button>
        </div>
        <div>
          {show && (
            <button onClick={() => dispatch(toggle())}>Toggle Counter</button>
          )}
        </div>
      </main>
    </div>
  );
}

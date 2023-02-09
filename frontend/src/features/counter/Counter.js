import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectErrorMessage
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const message = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  
  const [incrementAmount, setIncrementAmount] = useState('1');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <span>{message}</span>
      <div className={styles.row}>
        { count === 0 ? 
          <button
            className={styles.button}
            aria-label="Decrement value"
            disabled
            > -
          </button>
          :
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            > -
          </button>
        }
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          > +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
          > Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

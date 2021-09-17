import React, { useState } from "react";
import "./Counter.css";

const Counter = ({ start = 1, max = 1000 }) => {
  const [count, setCount] = useState(start);

  const onClickMinus = () => {
    if (count <= start) return;
    setCount((prevCount) => prevCount - 1);
  };

  const onClickPlus = () => {
    if (count >= max) return;
    setCount((prevCount) => prevCount + 1);
  };

  const onChangeCount = (e) => {
    setCount(+e.target.value);
  };

  return (
    <div className="container">
      <button className="child" onClick={onClickMinus}>
        -
      </button>
      <input
        className="child"
        type="text"
        value={count}
        onChange={onChangeCount}
      />
      <button className="child" onClick={onClickPlus}>
        +
      </button>
    </div>
  );
};

export default Counter;

// NOTE

// not sure about the behaviour of 'onChangeCount'
// if we need to keep the typed value between start and max, then
// we can do something like below

// const onChangeCount = (e) => {
//   const value = +e.target.value;
//   if (value < start) {
//     return setCount(start);
//   } else if (value > max) {
//     return setCount(max);
//   }
//   setCount(value);
// };

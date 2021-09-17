import { useState } from "react";

const useCounter = ({ start = 1, max = 1000 }) => {
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
    const value = +e.target.value;
    if (isNaN(value)) return;
    setCount(value);
  };

  return { onClickMinus, onClickPlus, onChangeCount, count };
};

export default useCounter;

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

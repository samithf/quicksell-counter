import PropTypes from "prop-types";
import useCounter from "../hooks/useCounter";
import "./Counter.css";

const Counter = (props) => {
  const { count, onChangeCount, onClickMinus, onClickPlus } = useCounter(props);

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
        maxLength={4}
      />
      <button className="child" onClick={onClickPlus}>
        +
      </button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  start: PropTypes.number,
  max: PropTypes.number,
};

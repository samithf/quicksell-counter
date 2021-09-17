import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />

      {/* with initial values */}
      {/* <Counter start={50} max={100} /> */}
    </div>
  );
}

export default App;

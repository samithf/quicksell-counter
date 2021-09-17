import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter start={5} max={20} />
    </div>
  );
}

export default App;

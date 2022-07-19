import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/action.js";
import { Todo } from "./components/todo/Todo";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* counter application
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(increment(1))}>INC by 1</button>
      <button onClick={() => dispatch(decrement(1))}>DEC by 1</button> */}
      <Todo />
    </div>
  );
}

export default App;

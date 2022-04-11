  import React from "react"
import './App.css';
import Counter from "./components/Counter.jsx";
import Todo from "./components/Todo.jsx";

function App() {
  
  return (
    <div className="App">
      <h1>
        Problem 1
      </h1>
    <Counter/>

  <h1>Problem 2</h1>
 <div>
 <Todo></Todo>
 </div>
    </div>
  );
}

export default App;

  import React from "react"
import './App.css';

function App() {
  const [counter,setCounter]=React.useState(0)
  const handle = (value) => {
    setCounter(counter+value)
  }
  const handle1 = () => {
    setCounter(counter*2)
  }
  return (
    <div className="App">
      <h1>
        Counter
      </h1>
    <h1>
      {counter}
    </h1>
    <button onClick={() => handle(1)}>Increament</button>
    <button onClick={() => handle(-1)}>Decreament</button>
    <button onClick={() => handle1()}>Double</button>

    
    </div>
  );
}

export default App;

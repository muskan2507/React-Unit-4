
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { store } from "./Redux/store";
import { MainRoutes } from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Provider store={store}>
        <MainRoutes/>
      </Provider>
     </BrowserRouter>
    </div>
  );
}

export default App;

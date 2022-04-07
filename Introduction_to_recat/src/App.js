import React from "react";
import './App.css';
import List from "./components/List.jsx"
import Joinus from "./components/Joinus.jsx";
import Settings from "./components/Settings.jsx";
import Contactus from "./components/Contactus.jsx";
import Login from "./components/Login.jsx";
import Help from "./components/Help.jsx";
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx";
import Download from "./components/Download.jsx";
import Allbtn from "./components/Allbtn.jsx";
function App() {
  return (
    <div className="App">
    <h1>
      Problem 1
    </h1>
     <List/>
     <h1>Problem 2 (part i)</h1>
      <div className="P2">
      <Joinus/>
      <Settings/>
      <Login/>
      <Contactus/>
      <Search/>
      <Help/>
      <Home/>
      <Download/>
      </div>
      <h1>Problem 2 (part ii)</h1>
      <div className="P3">
        <Allbtn id="B2" name="Join US" ></Allbtn>
        <Allbtn id="B1" name="Settings" ></Allbtn>
        <Allbtn  id="B3" name="Log in"></Allbtn>
        <Allbtn id="B4" name="Contacts"></Allbtn>
        <Allbtn id="B5" name="Search"></Allbtn>
        <Allbtn id="B6" name="Help"></Allbtn>
        <Allbtn id="B7" name="Home"></Allbtn>
        <Allbtn id="B8" name="Download"></Allbtn>
      </div>
    </div>
  );
}

export default App;

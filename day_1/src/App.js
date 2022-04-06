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
        <Allbtn name="Join US" ></Allbtn>
        <Allbtn name="Settings" ></Allbtn>
        <Allbtn name="Log in"></Allbtn>
        <Allbtn name="Contacts"></Allbtn>
        <Allbtn name="Search"></Allbtn>
        <Allbtn name="Help"></Allbtn>
        <Allbtn name="Home"></Allbtn>
        <Allbtn name="Download"></Allbtn>
      </div>
    </div>
  );
}

export default App;

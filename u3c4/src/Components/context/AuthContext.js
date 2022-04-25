// import axios from "axios";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = async(email, password) => {
    //  api request to reqres.in for the token
    let res = await fetch("https://reqres.in/api/login",{
      method:"POST",
      header:{"content-type":"application/json"},
      body:JSON.stringify({
        
          "email": "eve.holt@reqres.in",
          "password": "cityslicka"
      
      })
    })
    let data = await res.json()
    setToken(data.token)
    
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("")
  };

 

  return <AuthContext.Provider value={{ handleLogin, token, handleLogout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };

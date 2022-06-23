import  './App.css';
import React from "react";
import Header from "./Components/header/Header";
import User from "./Components/user/User";




function App (){
  return(
      <div>
          <Header name="beka"/>
          <User name="islam"/>
      </div>
  );
}

export default App;
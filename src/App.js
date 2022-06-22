import  './App.css';
import React from "react";
import Header from "./Components/header/Header";
import User from "./Components/user/User";




function App (){
  return(
      <div className="flex">
          <Header text="i am text"/>
          <User text='i am props'/>
      </div>
  );
}

export default App;
import React from "react";
import "./App.css";
import Display from "./components/Display.js";

function App() {
  return (
    <div className="App">
      <Display strikes={2} balls={3}/>
    </div>
  );
}

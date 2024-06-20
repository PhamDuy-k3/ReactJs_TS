import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from "./upDown";
import Todo from "./Todolist/todolist";
import Types from "./TypeScript Types/TypeScript Types";
import Fun from "./function/function";
import Condition from "./Condition";
import { Class } from "./class";
import Weather from "./weather-forecast/Weather";

function App() {
  return (
    <>
      {/* <Counter init= {0}/> */}
      {/* <Counter /> */}
      {/* <Todo /> */}
      <Weather />
      {/* <Types></Types> */}
      {/* <Fun></Fun> */}
      {/* <Condition/> */}
      {/* <Class/> */}
    </>
  );
}

export default App;

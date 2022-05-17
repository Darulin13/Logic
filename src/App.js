import React from "react";
import Cronometro from "./components/Cronometro"
import Contador from "./components/Contador"
import Todo from "./components/Todo"
import Home from "./components/Home"
import Calculadora from "./components/Calculadora"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }
`;
export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contador" element={<Contador />} />
        <Route path="/Cronometro" element={<Cronometro />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Calculadora" element={<Calculadora />} />
      </Routes>
    </Router>
  )
}
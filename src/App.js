import React from "react";
import Home from "./components/Home";
import Exercice from "./components/Exercice";
import Contact from "./components/Contact";
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
import ExercicesList from "./components/ExercicesList";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exerciceslist" element={<ExercicesList />} />
        <Route path="/exercice/:id" element={<Exercice />} />
      </Routes>
    </div>
  );
}

export default App;

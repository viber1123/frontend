import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tache from "./components/Tache";
import CreateTache from "./components/CreateTache";
import UpdateTache from "./components/UpdateTache";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tache />}></Route>
          <Route path="/create" element={<CreateTache />}></Route>
          <Route path="/update/:id" element={<UpdateTache />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const CreateTache = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8085/create", { nom, description })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
       <Navbar />
      <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form on onSubmit={handleSubmit}>
            <h2>Ajout</h2>
            <div className="mb-2">
              <label htmlFor="">Nom</label>
              <input
                type="text"
                placeholder="Entrer le nom de la tache"
                className="form-control"
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Description</label>
              <input
                type="text"
                placeholder="Entrer sa description"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
    </div>
    </>
   
  );
};
export default CreateTache;

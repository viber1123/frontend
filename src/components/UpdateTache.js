import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const UpdateTache = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:8085/update/" + id, {nom, description })
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
            <h2>UPDATE</h2>
            <div className="mb-2">
              <label htmlFor="">Nom</label>
              <input
                type="text"
                placeholder="Entrer le nouveau nom"
                className="form-control"
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Description</label>
              <input
                type="text"
                placeholder="Entrer entrer la nouvelle desription"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </>
    
  );
};
export default UpdateTache;

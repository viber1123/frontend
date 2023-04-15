import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Tache = () => {
  const [tache, setTache] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8085")
      .then((res) => setTache(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8085/tache/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className="w-90 bg-white rounded p-4">
          <Link to="/create" className="btn btn-success">
            {" "}
            ADD todo{" "}
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(tache).map((data, i) => (
                <tr key={i}>
                  <td>{data.Nom}</td>
                  <td>{data.Description}</td>
                  <td>
                    <Link to={`update/${data.id}`} className="btn btn-primary">
                      Update
                    </Link>
                    <button
                    className="btn btn-danger ms-2"
                    onClick={(e) => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Tache;

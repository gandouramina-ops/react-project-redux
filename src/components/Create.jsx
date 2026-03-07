import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/usersSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    Dispatch(addUsers({ name, email }));
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-500 border bg-secondary text-white p-5">
        <h3>Ajouter Un nouvel utilisateur</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Entrez votre nom complet"
              className="form-control"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Adresse Email"
              className="form-control"
              required
            />
          </div>
          <br />
          <button className="btn btn-info">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Create;

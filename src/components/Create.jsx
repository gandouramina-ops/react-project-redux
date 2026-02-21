import React from "react";

const Create = () => {
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Ajouter Un nouvel utilisateur</h3>
        <form action="">
          <div>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              value={""}
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
              value={""}
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

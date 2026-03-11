import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../redux/usersSlice";

const Home = () => {
  const { list: users, status, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status]);
  if (status === "loading") {
    return <div>Chargement ...</div>;
  }
  if (status === "failed") {
    return <div>erreur : {error}</div>;
  }
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);
  // fonction handle qui permet de supprimer l'utilisateur récupéré lors du clique sur le bouton supprimé
  const handleDelete = () => {
    if (selectedUserId) {
      dispatch(deleteUser(selectedUserId));
      setMessage("Supprimée Avec succès");
      setSelectedUserId(null);
    }
  };
  return (
    <div className="container">
      <h2>CRUD App avec redux toolkit </h2>
      <Link to="/add" className="btn btn-success my-3">
        Ajouter
      </Link>
      <h3>Liste des utilisateurs</h3>
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Modifier
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setSelectedUserId(user.id)} //récupération de l'id du user selectionné
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="4">Aucun Utilisateur trouvé.</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content center">
            <div className="modal-header ">
              <h1 className="modal-title  fs-5" id="exampleModalLabel">
                Suppression
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              êtes-vous sûre de vouloir supprimer cet utilisateur
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal" // permet de faire disparaitre la modal aprés le clique sur le bouton directement
              >
                Annuler
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleDelete} //permet de déclancher la fonction de suppression
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

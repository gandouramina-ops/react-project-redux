import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/usersSlice";

const Home = () => {
  const { list: users, status, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status]);

  return (
    <div className="container">
      <h2>CRUD App avec redux toolkit </h2>
      <Link to="/add" className="btn btn-success my-3">
        Ajouter
      </Link>
      <h3>Liste des utilisateurs</h3>
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
                <Link to={`/edit/${user.id}`} className="btn btn-primary btn-sm">
                  Modifier
                </Link>
                <button className="btn btn-danger btn-sm" onClick={""}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

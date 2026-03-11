import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../redux/usersSlice";

const Update = () => {
  const { id } = useParams(); //récupéerer l'id de l'url avec useParams
  const { list: users, status, error } = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id === id);
  const [uname, setuname] = useState("");
  const [uemail, setuemail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (existingUser) {
      setuname(existingUser.name); //c'est pour récupérer les informations de l'utilisateur à modifié
      setuemail(existingUser.email);
    }
  }, [existingUser]);
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editUser({ id, name: uname, email: uemail }));
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-500 border bg-secondary text-white p-5">
        <h3>Modifier l'utilisateur</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              value={uname}
              onChange={(e) => setuname(e.target.value)}
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
              value={uemail}
              onChange={(e) => setuemail(e.target.value)}
              placeholder="Adresse Email"
              className="form-control"
              required
            />
          </div>
          <br />
          <button className="btn btn-info">Modifier</button>
        </form>
      </div>
    </div>
  );
};

export default Update;

import React, { useState } from 'react'

const Update = () => {
  const [uname, setuname]= useState("")
  const [uemail, setuemail] = useState("")
  return (
     <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-500 border bg-secondary text-white p-5">
        <h3>Modifier l'utilisateur</h3>
        <form action="">
          <div>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              value={uname}
              onChange={(e)=> setuname(e.target.value)}
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
              onChange={(e)=> setuemail(e.target.value)}
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
  )
}

export default Update
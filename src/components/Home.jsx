import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <div className='container'>
        <h2>CRUD App avec redux toolkit </h2>
        <Link to="/add" className='btn btn-success my-3'>Ajouter</Link>
        <h3>Liste des utilisateurs</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Amina</td>
                    <td>Amina@gmail.com</td>
                    <td>
                        <Link to={'/edit/:id'} className='btn btn-primary btn-sm'>Modifier</Link>
                        <button className='btn btn-danger btn-sm' onClick={""}>Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Home
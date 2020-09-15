import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3003/users');
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }

    return (
        <div className="container">
            <div className="pu-4">
                <div className="card card-info">
                    <div className="card-header bg-info mb-3">
                        User List
                    </div>
                    <div className="card-body">
                        <table className="table borde shadow">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <Link className="btn btn-primary" to={`/users/${user.id}`} >View</Link>
                                                <Link className="btn btn-outline-primary" exact to={`/users/edit/${user.id}`} >Edit</Link>
                                                <Link className="btn btn-danger" onClick={() => deleteUser(user.id)} >Delete</Link>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
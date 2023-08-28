import axios from "axios";
import AdminHeader from "./adminheader";
import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
function Admin() {
    const [data, setData] = useState([]);

    function search(key) {

        if (key == ''||key==null) {
            axios.get('http://localhost:8000/api/userlist')
                .then(response => {
                    setData(response.data);s
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
        else {
            axios.get('http://localhost:8000/api/search/' + key)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/userlist')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);
    console.log("result", data);
    return (
        <div>
            <AdminHeader />
            <div className="container p-4">
                <div className="row">
                    <div className="col text-center">
                        <h1>Admin Panel</h1>
                    </div>
                </div>
            </div><br></br>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <h1>User List</h1>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-end">
                            <input type="text" onChange={(e) => search(e.target.value)} placeholder="Searrch User" className="form-control rounded-0" />
                        </div>
                    </div>
                </div>
            </div><br></br>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Birthdate</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.birthdate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    );
}
export default Admin;
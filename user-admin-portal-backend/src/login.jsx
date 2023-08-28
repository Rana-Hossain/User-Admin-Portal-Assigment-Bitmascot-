import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [valid, setisvalid] = useState("true")

    async function signin() {
        let item = { email, password };
        console.warn(item);

        if (email == "admin@localhost.local") // check for admin login
        {
            const responseAdmin = await axios.post('http://localhost:8000/api/adminLogin', item);
            console.log(responseAdmin.data.isvalid);
            if (!responseAdmin.data.isvalid) {
                setisvalid(false);
                //console.log("OK1");
                return;
            }
            else {
                //console.log("OK2");
                setisvalid(true);
                localStorage.setItem("user-info", JSON.stringify(responseAdmin.data));
                navigate('/admin');
                //history.push('/profile');
            }
        }
        else 
        {
            const response = await axios.post('http://localhost:8000/api/login', item);
            console.log(response.data.isvalid);
            if (!response.data.isvalid) {
                setisvalid(false);
                //console.log("OK1");
                return;
            }
            else {
                //console.log("OK2");
                setisvalid(true);
                localStorage.setItem("user-info", JSON.stringify(response.data));
                navigate('/profile');
                //history.push('/profile');
            }
        }


    }

    function clearText()
    {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    };



    return (
        <div>
            <div className="container p-4">
                <div className="row">
                    <div className="col text-center">
                        <h1>Login Panel</h1>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center bg-white p-4">
                <div className="bg-white p-3 rounded w-25 border border-primary ">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email">Email </label>
                            <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="form-control rounded-0" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="form-control rounded-0" />
                        </div>

                        <div className="d-flex justify-content-center align-items-center">
                            <button onClick={signin} className="m-4 btn btn-success w-20">Log in</button>
                            <button onClick={clearText}  className="m-4 btn btn-success w-20">Clear</button>

                        </div><br></br>
                        {!valid && (
                            <p className="text-danger">Invalid email or password.</p>
                        )}

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <p><strong>Are you new here?</strong></p>
                                </div>
                                <div className="col-md-6 d-flex align-items-center justify-content-end">
                                    <Link to="/registration" className="btn btn-primary text-decoration-none">Register</Link>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </div>

    );
}

export default Login;
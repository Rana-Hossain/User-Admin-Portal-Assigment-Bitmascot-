import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Registration() {

    
    const navigate = useNavigate();
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [password, setPassword] = useState("")


    const [emailIsUnique, setEmailIsUnique] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);

    // For check empty feild
    const [firstnameIsEmpty, setfirstnameIsEmpty] = useState(false);
    const [lastnameIsEmpty, setlastnameIsEmpty] = useState(false);
    const [addressIsEmpty, setaddressIsEmpty] = useState(false);
    const [PhoneIsEmpty, setPhoneIsEmpty] = useState(false);
    const [dobIsEmpty, setdobIsEmpty] = useState(false);
    const [emailIsEmpty, setemailIsEmpty] = useState(false);
    const [passwordIsEmpty, setpasswordIsEmpty] = useState(false);
    


    async function signup() {
        let item = { first_name, last_name, address, phone, email, birthdate, password }
        console.warn(item)

        if (first_name.trim() === '') {

            setfirstnameIsEmpty(true);
            return;
        }
        else{
            setfirstnameIsEmpty(false);
        }
        if (last_name.trim() === '') {

            setlastnameIsEmpty(true);
            return;
        }
        else{
            setlastnameIsEmpty(false);
        }
        if (address.trim() === '') {

            setaddressIsEmpty(true);
            return;
        }
        else{
            setaddressIsEmpty(false);
        }
        if (phone.trim() === '') {

            setPhoneIsEmpty(true);
            return;
        }
        else{
            setPhoneIsEmpty(false);
        }
        if (birthdate.trim() === '') {

            setdobIsEmpty(true);
            return;
        }
        else{
            setdobIsEmpty(false);
        }
        if (email.trim() === '') {

            setemailIsEmpty(true);
            return;
        }
        else{
            setemailIsEmpty(false);
        }
        
        if (password.trim() === '') {

            setpasswordIsEmpty(true);
            return;
        }
        else{
            setpasswordIsEmpty(false);
        }

        // Check valid emial
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailPattern.test(email))
        {
            setIsValidEmail(false);
            return;
        }
        else{
            setIsValidEmail(true);
        }


        // Check email uniqueness before submitting
        const response = await axios.post('http://localhost:8000/api/checkEmailUnique', item);
        console.log(response.data.isUnique);
        if (!response.data.isUnique) {
            setEmailIsUnique(false);
            return;
        }
        else{
            setEmailIsUnique(true);
        }


        try {
            const response = await axios.post('http://localhost:8000/api/registerUser', item);

            console.log('User registered:', response.data);
            //let result = await response.data.json();
            localStorage.setItem("user-info",JSON.stringify(response.data));
            navigate('/profile');
            
            
        } catch (error) {
            console.error('Error registering user:', error);
        }



        // let result = await fetch("http://localhost:8000/api/register", {
        //     method: 'POST',
        //     body: JSON.stringify(item),
        //     headers: {
        //         "Content-Type": 'application/json',
        //         "Accept": 'application/json'
        //     }
        // })
        // result = await result.json()
        //console.warn("result", result)
    }
    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <div>
            <div className="container p-1">
                <div className="row">
                    <div className="col text-center">
                        <h1>Registration Panel</h1>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center bg-white p-1">
                <div className="bg-white p-3 rounded w-25 border border-primary ">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="firstname">First Name </label>
                            <input type="text" value={first_name} onChange={(e) => setFirst_name(e.target.value)} placeholder="Enter Fast Name" className="form-control rounded-0" />
                            {firstnameIsEmpty && (
                                <p className="text-danger">Fist name can not be empty.</p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname">Last Name </label>
                            <input type="text" value={last_name} onChange={(e) => setLast_name(e.target.value)} placeholder="Enter Last Name" className="form-control rounded-0" />
                            {lastnameIsEmpty && (
                                <p className="text-danger">Last name can not be empty.</p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address">Address </label>
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Adress" className="form-control rounded-0" />
                            {addressIsEmpty && (
                                <p className="text-danger">Address can not be empty.</p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Phone">Phone </label>
                            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" className="form-control rounded-0" />
                            {PhoneIsEmpty && (
                                <p className="text-danger">Phone number can not be empty.</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                            <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} className="form-control" id="dob" name="dob" />
                            {dobIsEmpty && (
                                <p className="text-danger">Birthdate can not be empty.</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email </label>
                            <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="form-control rounded-0" />
                            {!emailIsUnique && (
                                <p className="text-danger">Email is already taken.</p>
                            )}
                            {emailIsEmpty && (
                                <p className="text-danger">Email can not be empty.</p>
                            )}
                            {!isValidEmail && (
                                <p className="text-danger">Please enter valid email.</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="form-control rounded-0" />
                            {passwordIsEmpty && (
                                <p className="text-danger">Password can not be empty.</p>
                            )}
                        </div>


                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center">
                                    <button onClick={signup} className="btn btn-primary">Register</button>
                                </div>
                                <div className="col-md-6 d-flex align-items-center justify-content-end">
                                    <Link to="/" className="btn btn-primary text-decoration-none">Login</Link>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    );
}

export default Registration

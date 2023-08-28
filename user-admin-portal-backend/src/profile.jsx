import Header from "./header";
import React, { useState, useEffect } from 'react';
function Profile() {

    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        // Retrieve user info from local storage
        const storedUserInfo = localStorage.getItem('user-info');

        if (storedUserInfo) {
            const parsedUserInfo = JSON.parse(storedUserInfo);
            setUserInfo(parsedUserInfo[0]);
            //console.log(userInfo); // Assuming you're only interested in the first entry
        }
    }, []);
    return (
        <div>
            <Header />
            <div className="container p-4">
                <div className="row">
                    <div className="col text-center">
                        <h1>User Profile</h1>
                    </div>
                </div>
            </div><br></br>
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="firstname" style={{ fontWeight: 'bold', color: 'black' }}> First Name : {userInfo.first_name}</label><br></br>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" style={{ fontWeight: 'bold', color: 'black' }}> Last Name : {userInfo.last_name}</label><br></br>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" style={{ fontWeight: 'bold', color: 'black' }}> Address : {userInfo.address}</label><br></br>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Phone" style={{ fontWeight: 'bold', color: 'black' }}> Phone : {userInfo.phone}</label><br></br>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" style={{ fontWeight: 'bold', color: 'black' }}> Email : {userInfo.email}</label><br></br>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob" style={{ fontWeight: 'bold', color: 'black' }}> Date of Birth : {userInfo.birthdate}</label><br></br>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
}
export default Profile;
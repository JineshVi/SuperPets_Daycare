import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import './pageStyles/login.css';

//Login page(component) of the React application
const Login = () => {
    const navigate = useNavigate();
    //using useSelector hook to fetch the state
    const listOfUsers = useSelector((state) => state.user.users);

    const handleLogin = (event) => {
        event.preventDefault();
        //Getting data from form fields
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        //Checking for empty values
        if (email.trim() === "" || password.trim() === "") {
            alert("Please enter both email and password");
            return;
        }
        //Identifying uniqueUser
        const uniqueUser = listOfUsers.find((user) => user.email === email && user.password === password);
        //Redirecting to homepage to display the user details
        if (uniqueUser) {
            navigate('/', { state: { user:uniqueUser } });
        } else {
            alert("User does not exist or Wrong Password");
        }
    }

    return(
        <>
            <div className="login">
                <h1>Welcome to Log In Page</h1>
                <br/>
                <form className="login_info" onSubmit={handleLogin}>
                    <label htmlFor="email">E-mail: </label>
                    <input type="text" id="email" name="email"></input>
                    <br/>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password"></input>
                    <br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </>
    );
}

export default Login;
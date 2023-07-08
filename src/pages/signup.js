import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";
import './pageStyles/signup.css';


//Signup page(component) of the React application
const SignUp = () => {

    const dispatch = useDispatch();

    const listOfUsers = useSelector((state) => state.user.users);

    const handleSubmit = (event) => {
        event.preventDefault();
        //Fetching data from form fields
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let petanimal = document.getElementById("petanimal").value;
        let petname = document.getElementById("petname").value;
        //Filtering existing users
        const existingUsers = listOfUsers.filter((user) => user.email === email && user.name === name);
        //Invoking dispatch function to add new user to the Redux store
        if(existingUsers.length === 0){
            dispatch(addUser({
                name, email, password, petanimal, petname
            }));
            alert("You've sucessfully registered!");
        }
        else{
            alert("Already registered!");
        }
    }

    return(
        <>
            <div className="signuppage">
                <h1>Welcome to the Sign Up Page</h1>
                <form className="userinfo" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name"></input>
                    <br/>
                    <label htmlFor="email">E-mail: </label>
                    <input type="text" id="email" name="email"></input>
                    <br/>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password"></input>
                    <br/>
                    <label htmlFor="petanimal">Pet animal: </label>
                    <input type="text" id="petanimal" name="petanimal"></input>
                    <br/>
                    <label htmlFor="petname">Pet name: </label>
                    <input type="text" id="petname" name="petname"></input>
                    <br/>
                    <input type="submit" value="Submit"></input>
                    <br/>
                </form>
            </div>
        </>
    );
}

export default SignUp;
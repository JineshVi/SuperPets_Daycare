import React from "react";
import './pageStyles/home.css';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/userSlice";
import { RxAvatar } from "react-icons/rx";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
    const iconstyle = {position: "absolute",
    top: "20px",
    right: "20px",
    color: "black",
    fontSize: "40px",};
    //Declaring required hooks 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const location = useLocation();

    const handleLogout = () => {
        //Dispatching to clear the stored states from Redux store
        dispatch(logoutUser());
        navigate('./login');
    }

    const { state } = location;
    const uniqueUser = state && state.user;

    return(
        <>
            <div className="homepage">
                <p>Welcome to Super Pets Daycare!</p>
                {isLoggedIn && (<RxAvatar style={iconstyle} onClick={handleLogout}></RxAvatar>)}
                {uniqueUser && (
                    <div className="tableContainer">
                        <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Pet Animal</th>
                                <th>Pet Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{uniqueUser.name}</td>
                                <td>{uniqueUser.email}</td>
                                <td>{uniqueUser.petanimal}</td>
                                <td>{uniqueUser.petname}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                )}
            </div>
            <footer>&copy; All rights reserved</footer>
        </>
    );
}

export default Home;
import { Nav, NavLink, NavMenu, Bars } from './navPannelElements';
import { FaHome } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';

const NavPannel = () => {
    let iconstyle = {fontSize: "2em"};
    return(
        //Using the Navigation bar elements from navPannelElements file to create a Navigation Bar
        <Nav>
            <Bars/>
            <NavMenu>
                <NavLink to="/" activestyle><FaHome style={iconstyle}/></NavLink>
                <NavLink to="/signup" activestyle>Sign Up</NavLink>
                <NavLink to="/contact" activestyle>Contact Us</NavLink>
                <NavLink to="/login" activestyle><BiLogIn style={iconstyle}/></NavLink>
            </NavMenu>
        </Nav>
    );
}

export default NavPannel;
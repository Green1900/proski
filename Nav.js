import {  Link } from 'react-router-dom';

function Nav() {
    return (
        <nav >
        <Link to="/">Welcome Page</Link>
        <br/>
        <Link to="/challenge">Challenge Page</Link>
        <br/>
        <Link to="/minigame">MiniGame</Link>
        <br/>
        <Link to="/profile">Profile Page</Link>
        </nav>
    )
}

export default Nav;
import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();

    return (
        <div>
            <ul className="navWrap">
                <li className="navItem" onClick={() => {navigate("/about");}}>
                    <span>About</span>
                </li>
                <li className="navItem"onClick={() => {navigate("/works");}}>
                    <span>Works</span>
                </li>
            </ul>
        </div>
    )
}

export default Nav;

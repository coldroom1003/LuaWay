import React from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const Header = () => {
const navigate = useNavigate();

    return (
        <div>
            <div className="headerWrap">
                <div className="logo">
                    {/* <img src="/images/logo.jpg" alt="로고이미지"/> */}
                    <span onClick={() => {navigate("/home");}}>로고</span>
                </div>
                <Nav />
            </div>
        </div>
    )
}

export default Header;
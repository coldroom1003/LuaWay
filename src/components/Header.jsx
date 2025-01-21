import React from "react";
import Nav from "./Nav";

const Header = () => {
    return (
        <div>
            <div className="headerWrap">
                <div className="logo">
                    {/* <img src="/images/logo.jpg" alt="로고이미지"/> */}
                    <span>로고</span>
                </div>
                <Nav />
            </div>
        </div>
    )
}

export default Header;
import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Contact from "../pages/Contact";

const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="works" element={<Works />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
    );
};

export default Router;
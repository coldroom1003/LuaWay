import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import TodoListWrap from "../pages/TodoListWrap";

const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="works" element={<Works />} />
                <Route path="contact" element={<Contact />} />
                <Route path="todolist" element={<TodoListWrap />} />
            </Routes>
    );
};

export default Router;
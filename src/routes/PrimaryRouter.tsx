import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Privacy from "../pages/Privacy"

export default function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </BrowserRouter>
    );
}
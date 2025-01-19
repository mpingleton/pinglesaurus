import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import SoftwareProjects from "../pages/SoftwareProjects"
import Prints from "../pages/Prints"
import Gallery from "../pages/Gallery"
import Blog from "../pages/Blog"
import Updates from "../pages/Updates"
import Contacts from "../pages/Contact"
import Privacy from "../pages/Privacy"

export default function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/software" element={<SoftwareProjects />} />
                <Route path="/3dprinting" element={<Prints />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/updates" element={<Updates />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </BrowserRouter>
    );
}
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/home/Home"
import SoftwareProjects from "../pages/software/SoftwareProjects"
import Prints from "../pages/prints/Prints"
import Gallery from "../pages/gallery/Gallery"
import Blog from "../pages/blog/Blog"
import Updates from "../pages/updates/Updates"
import Contacts from "../pages/contact/Contact"
import Privacy from "../pages/privacy/Privacy"

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
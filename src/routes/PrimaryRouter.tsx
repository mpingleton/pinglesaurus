import React from "react"
import { useNavigate } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Privacy from "../pages/privacy/Privacy"

import DynamicPageRouter from "./DynamicPageRouter"

export default function PrimaryRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/software" element={<DynamicPageRouter onPageId="software" />} />
                <Route path="/3dprinting" element={<DynamicPageRouter onPageId="3dprinting" />} />
                <Route path="/gallery" element={<DynamicPageRouter onPageId="gallery" />} />
                <Route path="/blog" element={<DynamicPageRouter onPageId="blog" />} />
                <Route path="/updates" element={<DynamicPageRouter onPageId="updates" />} />
                <Route path="/contact" element={<DynamicPageRouter onPageId="contact" />} />
                <Route path="/privacy" element={<DynamicPageRouter onPageId="privacy" />} />
                <Route path="/" element={<DynamicPageRouter />} />
            </Routes>
        </BrowserRouter>
    );
}
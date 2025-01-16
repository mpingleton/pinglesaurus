import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"
import MobileLayout from "../layouts/MobileLayout"
import Home from "../pages/Home"
import ProjectProfile from "../pages/ProjectProfile"
import Projects from "../pages/Projects"
import Privacy from "../pages/Privacy"

export default function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainLayout title="Home"><Home isMobile={false} /></MainLayout>}
                />
                <Route
                    path="/projects/id/:projectId"
                    element={<MainLayout title="Project"><ProjectProfile isMobile={false} /></MainLayout>}
                />
                <Route
                    path="/projects"
                    element={<MainLayout title="Projects"><Projects isMobile={false} /></MainLayout>}
                />
                <Route
                    path="/privacy"
                    element={<MainLayout title="Privacy Policy"><Privacy isMobile={false} /></MainLayout>}
                />
                <Route
                    path="/mobile"
                    element={<MobileLayout title="Home"><Home isMobile={true} /></MobileLayout>}
                />
                <Route
                    path="/mobile/projects/id/:projectId"
                    element={<MobileLayout title="Project"><ProjectProfile isMobile={true} /></MobileLayout>}
                />
                <Route
                    path="/mobile/projects"
                    element={<MobileLayout title="Projects"><Projects isMobile={true} /></MobileLayout>}
                />
                <Route
                    path="/mobile/privacy"
                    element={<MobileLayout title="Privacy Policy"><Privacy isMobile={true} /></MobileLayout>}
                />
            </Routes>
        </BrowserRouter>
    );
}
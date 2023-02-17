import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MobileLayout from "../layouts/MobileLayout";
import Home from "../pages/Home";
import ProjectProfile from "../pages/ProjectProfile";
import Projects from "../pages/Projects";
import Privacy from "../pages/Privacy";

function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainLayout title="Home"><Home /></MainLayout>}
                />
                <Route
                    path="/projects/id/:projectId"
                    element={<MainLayout title="Project"><ProjectProfile /></MainLayout>}
                />
                <Route
                    path="/projects"
                    element={<MainLayout title="Projects"><Projects /></MainLayout>}
                />
                <Route
                    path="/privacy"
                    element={<MainLayout title="Privacy Policy"><Privacy /></MainLayout>}
                />
                <Route
                    path="/mobile"
                    element={<MobileLayout title="Home"><Home isMobile={true} /></MobileLayout>}
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

export default PrimaryRouter;
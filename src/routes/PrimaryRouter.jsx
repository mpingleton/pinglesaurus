import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
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
                    path="/privacy"
                    element={<MainLayout title="Privacy Policy"><Privacy /></MainLayout>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;
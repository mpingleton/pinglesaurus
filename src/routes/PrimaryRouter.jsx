import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainLayout title="Home"><Home /></MainLayout>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;
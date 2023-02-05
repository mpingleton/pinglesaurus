import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainLayout title="Home"><h1>Hi</h1></MainLayout>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;
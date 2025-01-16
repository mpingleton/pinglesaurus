import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import PrimaryRouter from "./routes/PrimaryRouter"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><PrimaryRouter /></React.StrictMode>);
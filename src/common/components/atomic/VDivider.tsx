import React from "react"

export default function VDivider() {

    const st: React.CSSProperties = {
        height: "auto",
        width: "1px",
        backgroundColor: "#444444"
    }

    return (<div style={st}></div>)
}
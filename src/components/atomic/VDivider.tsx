import React from "react"

export default function VDivider() {

    const st: React.CSSProperties = {
        height: "auto",
        width: "1px",
        backgroundColor: "gray"
    }

    return (<div style={st}></div>)
}
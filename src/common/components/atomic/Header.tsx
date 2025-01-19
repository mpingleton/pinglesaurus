import React from "react"

export default function Header(props: {}) {

    const st: React.CSSProperties = {
        position: "absolute",
        zIndex: 1,
        top: "0px",
        width: "100%",
        height: "140px",
        backgroundColor: "rgba(20, 20, 20, 0.5)"
    }

    return (<div style={st}></div>)
}
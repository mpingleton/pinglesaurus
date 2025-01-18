import React from "react"

export default function Body(props: { children: React.ReactNode }) {

    const st: React.CSSProperties = {
        position: "absolute",
        zIndex: 1,
        top: "140px",
        width: "100%",
        paddingBottom: "10px",
        color: "lightgray"
    }

    return (<div style={st}>{props.children}</div>)
}
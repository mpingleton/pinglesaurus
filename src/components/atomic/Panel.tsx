import React from "react"

export default function Panel(props: { children: React.ReactNode }) {

    const st: React.CSSProperties = {
        display: "block",
        boxSizing: "border-box",
        width: "100%",
        margin: "0px",
        padding: "24px",
        borderWidth: "1px",
        borderColor: "gray",
        borderStyle: "solid",
        borderRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)"
    }

    return (<div style={st}>{props.children}</div>)
}
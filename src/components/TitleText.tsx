import React from "react"

export default function HeaderText(props: { children?: React.ReactNode }) {

    const st: React.CSSProperties = {
        fontFamily: "Arial, sans-serif",
        fontSize: "28pt",
        fontWeight: "bold",
        margin: "0px",
        padding: "0px"
    }

    return (<h1 style={st}>{props.children}</h1>)
}
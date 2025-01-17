import React from "react"

export default function HeaderText(props: { children?: React.ReactNode }) {

    const st: React.CSSProperties = {
        fontFamily: "Arial, sans-serif",
        fontSize: "20pt",
        fontWeight: "bold",
        margin: "0px",
        padding: "0px"
    }

    return (<h3 style={st}>{props.children}</h3>)
}
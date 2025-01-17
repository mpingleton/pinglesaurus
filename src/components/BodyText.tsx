import React from "react"

export default function BodyText(props: { children?: React.ReactNode }) {

    const st: React.CSSProperties = {
        fontFamily: "Arial, sans-serif",
        fontSize: "14pt",
        fontWeight: "normal",
        margin: "0px",
        padding: "0px"
    }

    return (<p style={st}>{props.children}</p>)
}
import React from "react"
import { Property } from "csstype"

export default function HeaderText(props: {
    centered?: boolean,
    children?: React.ReactNode
}) {

    let textAlign: Property.TextAlign = "left"
    if (props.centered !== undefined) {
        if (props.centered) {
            textAlign = "center"
        }
    }

    const st: React.CSSProperties = {
        fontFamily: "Arial, sans-serif",
        fontSize: "28pt",
        fontWeight: "bold",
        margin: "0px",
        padding: "0px",
        width: "100%",
        textAlign
    }

    return (<h1 style={st}>{props.children}</h1>)
}
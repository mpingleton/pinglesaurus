import React from "react"
import { Property } from "csstype"

export default function BodyText(props: {
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
        fontSize: "14pt",
        fontWeight: "normal",
        margin: "0px",
        padding: "0px",
        width: "100%",
        textAlign
    }

    return (<p style={st}>{props.children}</p>)
}
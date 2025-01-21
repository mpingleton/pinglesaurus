import React from "react"

export default function Body(props: { width?: string, children: React.ReactNode }) {

    const st: React.CSSProperties = {
        position: "absolute",
        zIndex: 1,
        top: "140px",
        left: props.width === undefined ? "0px" : `calc(50% - ${props.width} / 2)`,
        right: "auto",
        width: props.width === undefined ? "100%" : props.width!,
        minHeight: "calc(100vh - 140px)",
        color: "lightgray"
    }

    return (<div style={st}>{props.children}</div>)
}
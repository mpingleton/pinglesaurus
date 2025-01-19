import React from "react"

export default function Box(props: {
    width?: string,
    height?: string,
    children: React.ReactNode
}) {

    const st: React.CSSProperties = {
        width: props.width,
        height: props.height,
    }

    return (<div style={st}>{props.children}</div>)
}
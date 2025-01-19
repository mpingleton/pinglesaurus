import React from "react"

export default function HStack(props: {
    width?: string,
    height?: string,
    justifyContent?: string,
    justifyItems?: string,
    padding?: string,
    gapping?: string,
    wrap?: boolean,
    children: React.ReactNode
}) {

    const st: React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        width: props.width === undefined ? "auto" : props.width!,
        height: props.height === undefined ? "auto" : props.height!,
        justifyContent: props.justifyContent === undefined ? "start" : props.justifyContent!,
        justifyItems: props.justifyItems === undefined ? "start" : props.justifyItems!,
        padding: props.padding === undefined ? "8px" : props.padding!,
        gap: props.gapping === undefined ? "8px" : props.gapping!,
        flexWrap: props.wrap ? "wrap" : "nowrap",
    }

    return (<div style={st}>{props.children}</div>)
}
import React from "react"

export default function Image(props: {
    width?: string,
    height?: string,
    url: string,
    alt: string
}) {

    const sx: React.CSSProperties = {
        display: "block",
        width: props.width === undefined ? "auto" : props.width!,
        height: props.height === undefined ? "auto" : props.height!,
    }

    return (<img style={sx} src={props.url} alt={props.alt} />)
}
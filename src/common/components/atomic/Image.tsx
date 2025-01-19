import React from "react"

export default function Image(props: {
    width?: string,
    height?: string,
    bordered?: boolean,
    centered?: boolean,
    url: string,
    alt: string
}) {

    const sx: React.CSSProperties = {
        display: "block",
        width: props.width === undefined ? "auto" : props.width!,
        height: props.height === undefined ? "auto" : props.height!,
        alignSelf: props.centered ? "center" : undefined,
        borderWidth: props.bordered ? "1px" : "0px",
        borderColor: props.bordered ? "gray" : "transparent",
        borderRadius: props.bordered ? "5px" : "0px",
        borderStyle: props.bordered ? "solid" : "none"
    }

    return (<img style={sx} src={props.url} alt={props.alt} />)
}
import React from "react"

export default function MobileAppBarButton(props: {
    title: string,
    highlighted?: boolean,
    href?: string,
    onClicc?: () => void
}) {

    function handleClick() {
        if (props.onClicc) {
            props.onClicc()
        }
    }

    let backgroundColor = "transparent"
    if (props.highlighted) {
        backgroundColor = "rgba(0, 80, 130, 0.6)"
    }

    const stLi: React.CSSProperties = {
        display: "inline",
        width: "100%",
        height: "100%",
        backgroundColor
    }

    const stA: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        textDecoration: "none",
        fontSize: "20pt",
        color: "lightgray"
    }

    return (
        <li style={stLi}>
            <a style={stA} href={props.href} onClick={handleClick}>{props.title}</a>
        </li>
    )
}
import React, { useState } from "react"

export default function AppBarButton(props: {
    title: string,
    highlighted?: boolean,
    href?: string,
    onClicc?: () => void
}) {
    const [isHover, setHover] = useState<boolean | undefined>(undefined)

    function handleClick() {
        if (props.onClicc) {
            props.onClicc()
        }
    }

    let background = "url('/images/gradient-bar.png')"
    let animation = isHover === undefined ? "" : "mainlayout_linkbar_item_mouseout"
    if (props.highlighted || isHover) {
        background = "url('/images/gradient-bar_hover.png')"
        animation = "mainlayout_linkbar_item_mouseover"
    }

    const stLi: React.CSSProperties = {
        display: "inline",
        width: "100%",
        height: "100%",
    }

    const stA: React.CSSProperties = {
        display: "block",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        fontSize: "14pt",
        lineHeight: "60px",
        textDecoration: "none",
        color: "lightgray",
        backgroundImage: background,
        backgroundSize: "100% 100%",
        animationName: animation,
        animationDuration: "0.2s"
    }

    return (
        <li
            style={stLi}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <a style={stA} href={props.href} onClick={handleClick}>{props.title}</a>
        </li>
    )
}
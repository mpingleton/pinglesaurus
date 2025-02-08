import React, { useState } from "react"

export default function AppBarHomeButton(props: {
    href?: string,
    highlighted?: boolean,
    onClicc?: () => void
}) {
    const [isHover, setHover] = useState<boolean>(false)

    function handleClick() {
        if (props.onClicc) {
            props.onClicc()
        }
    }

    let background = "url('/images/homebutton.png')"
    let animation = "mainlayout_homebutton_mouseout"
    if (props.highlighted || isHover) {
        background = "url('/images/homebutton_hover.png')"
        animation = "mainlayout_homebutton_mouseover"
    }

    const stDiv: React.CSSProperties = {
        position: "fixed",
        zIndex: 2,
        top: "0px",
        left: "calc(50% - 80px)",
        width: "160px",
        height: "80px",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)"
    }

    const stA: React.CSSProperties = {
        display: "block",
        textAlign: "center",
        lineHeight: "80px",
        textDecoration: "none",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        color: "white",
        backgroundImage: background,
        backgroundSize: "100% 100%",
        animationName: animation,
        animationDuration: "0.2s"
    }

    return (
        <div
            style={stDiv}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <a style={stA} href={props.href} onClick={handleClick}>&nbsp;</a>
        </div>
    )
}
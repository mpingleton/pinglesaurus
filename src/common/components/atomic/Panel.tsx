import React, { useState } from "react"

export default function Panel(props: {
    cliccable?: boolean,
    onClicc?: () => void,
    width?: string,
    height?: string,
    children: React.ReactNode
}) {

    const [isHover, setHover] = useState<boolean>(false)
    const [isClicc, setClicc] = useState<boolean>(false)

    function handleClick() {
        if (props.cliccable && props.onClicc) {
            props.onClicc()
        }
    }

    let backgroundColor = "rgba(0, 0, 0, 0.6)"
    let backgroundImage = undefined
    let animationName = undefined
    if (props.cliccable) {
        backgroundImage = "url('/images/gradient-bar.png')"
        animationName = "panel_mouseout"

        if (isClicc) {
            backgroundColor = "rgba(0, 50, 100, 0.6)"
            animationName = "panel_mousedown"
        } else if (isHover) {
            backgroundColor = "rgba(0, 50, 100, 0.6)"
            backgroundImage = "url('/images/gradient-bar_hover.png')"
            animationName = "panel_mouseover"
        }
    }

    const st: React.CSSProperties = {
        display: "block",
        boxSizing: "border-box",
        width: props.width === undefined ? "100%" : props.width!,
        height: props.height === undefined ? undefined : props.height!,
        margin: "0px",
        padding: "14px",
        borderWidth: "1px",
        borderColor: "gray",
        borderStyle: "solid",
        borderRadius: "10px",
        backgroundColor,
        backgroundImage,
        backgroundSize: "100% 100%",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        animationName,
        animationDuration: "0.2s"
    }

    return (
        <div
            style={st}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setClicc(true)}
            onMouseUp={() => setClicc(false)}
            onClick={handleClick}
        >
            {props.children}
        </div>)
}
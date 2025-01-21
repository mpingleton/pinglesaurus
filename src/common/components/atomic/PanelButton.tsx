import React, { useState } from "react"

export default function PanelButton(props: { onClicc?: () => void, children: React.ReactNode }) {
    const [isHover, setHover] = React.useState<boolean>(false)
    const [isClicc, setClicc] = useState<boolean>(false)

    function handleClick() {
        if (props.onClicc) {
            props.onClicc()
        }
    }

    let backgroundColor = "transparent"
    let backgroundImage = undefined
    let animationName = "panelbutton_mouseout"
    if (isClicc) {
        backgroundColor = "rgba(0, 50, 100, 0.6)"
        animationName = "panelbutton_mousedown"
    } else if (isHover) {
        backgroundColor = "rgba(0, 50, 100, 0.6)"
        backgroundImage = "url('/images/hover.png')"
        animationName = "panelbutton_mouseover"
    }

    const st: React.CSSProperties = {
        width: "100%",
        borderStyle: "none",
        borderRadius: "5px",
        borderWidth: "1px",
        backgroundColor,
        backgroundImage,
        backgroundSize: "100% 100%",
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
        </div>
    )
}
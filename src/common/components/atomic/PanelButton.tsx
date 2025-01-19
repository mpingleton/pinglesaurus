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
    if (isClicc) {
        backgroundColor = "rgba(0, 80, 130, 0.6)"
    } else if (isHover) {
        backgroundColor = "rgba(0, 130, 180, 0.6)"
    }

    const st: React.CSSProperties = {
        width: "100%",
        borderStyle: "none",
        borderRadius: "5px",
        borderWidth: "1px",
        backgroundColor
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
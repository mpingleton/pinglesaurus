import React, { useState } from "react"

export default function Panel(props: {
    cliccable?: boolean,
    onClicc?: () => void,
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
    if (props.cliccable) {
        if (isClicc) {
            backgroundColor = "rgba(0, 80, 130, 0.6)"
        } else if (isHover) {
            backgroundColor = "rgba(0, 130, 180, 0.6)"
        }
    }

    const st: React.CSSProperties = {
        display: "block",
        boxSizing: "border-box",
        width: "100%",
        margin: "0px",
        padding: "20px",
        borderWidth: "1px",
        borderColor: "gray",
        borderStyle: "solid",
        borderRadius: "10px",
        backgroundColor,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)"
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
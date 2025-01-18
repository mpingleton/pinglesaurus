import React, { useState } from "react"

export default function Panel(props: { cliccable?: boolean, children: React.ReactNode }) {

    const [isHover, setHover] = useState<boolean>(false)
    const [isClicc, setClicc] = useState<boolean>(false)

    let backgroundColor = "rgba(0, 0, 0, 0.6)"
    if (props.cliccable) {
        if (isClicc) {
            backgroundColor = "rgba(0, 30, 50, 0.6)"
        } else if (isHover) {
            backgroundColor = "rgba(0, 50, 70, 0.6)"
        }
    }

    const st: React.CSSProperties = {
        display: "block",
        boxSizing: "border-box",
        width: "100%",
        margin: "0px",
        padding: "24px",
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
        >
            {props.children}
        </div>)
}
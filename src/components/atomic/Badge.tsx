import React from "react"

export default function Badge(props: { badgeColor: string, textColor: string, text: string }) {

    const badgeStyle: React.CSSProperties = {
        display: "block",
        boxSizing: "border-box",
        padding: "5px",
        margin: "5px",
        width: "fit-content",
        height: "fit-content",
        borderRadius: "5px",
        backgroundSize: "cover",
        backgroundImage: "url('/images/gradient-bar.png')",
        backgroundColor: props.badgeColor,
        color: props.textColor
    }

    return (
        <div style={badgeStyle}>
            <span>{props.text}</span>
        </div>
    )
}
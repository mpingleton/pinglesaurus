import React from "react"

export default function Badge(props: { badgeColor: string, textColor: string, text: string }) {

    const badgeStyle = {
        backgroundColor: props.badgeColor,
        color: props.textColor
    }

    return (
        <div className="badge" style={badgeStyle}>
            <span>{props.text}</span>
        </div>
    )
}
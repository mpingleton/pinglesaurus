import React from "react"

export default function Modal(props: {
    isOpen: boolean,
    onClose: () => void,
    width?: string,
    height?: string,
    children: React.ReactNode
}) {

    if (!props.isOpen) {
        return null
    }

    const backdropStyle: React.CSSProperties = {
        position: "fixed",
        zIndex: 3,
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)"
    }

    const modalStyle: React.CSSProperties = {
        position: "fixed",
        display: "block",
        zIndex: 4,
        top: `calc(50% - ${props.height} / 2)`,
        left: `calc(50% - ${props.width} / 2)`,
        width: props.width,
        height: props.height
    }

    return (
        <>
            <div style={backdropStyle} onClick={() => props.onClose()} />
            <div style={modalStyle}>{props.children}</div>
        </>
    )
}
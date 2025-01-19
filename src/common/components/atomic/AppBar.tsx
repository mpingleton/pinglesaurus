import React from "react"

export default function AppBar(props: {
    center: React.ReactNode,
    leftSide: React.ReactNode,
    rightSide: React.ReactNode
}) {

    const stUl: React.CSSProperties = {
        display: "flex",
        justifyContent: "space-evenly",
        listStyleType: "none",
        width: "100%",
        height: "100%",
        margin: "0px",
        padding: "0px"
    }

    const stDivL: React.CSSProperties = {
        position: "fixed",
        zIndex: 2,
        top: "0px",
        left: "0px",
        width: "calc(50% - 80px)",
        height: "60px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)"
    }

    const stDivR: React.CSSProperties = {
        position: "fixed",
        zIndex: 2,
        top: "0px",
        left: "calc(50% + 80px)",
        width: "calc(50% - 80px)",
        height: "60px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)"
    }

    const l = (<div style={stDivL}><ul style={stUl}>{props.leftSide}</ul></div>)
    const r = (<div style={stDivR}><ul style={stUl}>{props.rightSide}</ul></div>)

    return (<>{l}{props.center}{r}</>)
}
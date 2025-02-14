import React, { useState } from "react"

export default function MobileAppBar(props: { buttons: React.ReactNode }) {
    const [isAppBarOpen, setAppBarOpen] = useState<boolean>(false)

    let background = "url('/images/gradient-bar.png')"
    let animation = "mobilelayout_linkbar_item_deselect"
    if (isAppBarOpen) {
        background = "url('/images/gradient-bar_hover.png')"
        animation = "mobilelayout_linkbar_item_select"
    }

    const stDiv: React.CSSProperties = {
        position: "fixed",
        zIndex: 2,
        top: "0px",
        width: "100%",
        height: "60px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)"
    }

    const stDivBar: React.CSSProperties = {
        display: "block",
        width: "100%",
        height: "100%",
        textAlign: "center",
        color: "white",
        backgroundImage: background,
        backgroundSize: "100% 100%",
        animationName: animation,
        animationDuration: "0.2s"
    }

    const stImg: React.CSSProperties = {
        display: "block",
        width: "100%",
        height: "auto"
    }

    const stDivPage: React.CSSProperties = {
        display: "block",
        position: "fixed",
        zIndex: 2,
        top: "60px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        backgroundColor: "rgba(20, 20, 20, 0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        animationName: "mobilelayout_linkpage_appear",
        animationDuration: "0.2s"
    }

    const stUlPage: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        listStyleType: "none",
        width: "100%",
        height: "100%",
        margin: "0px",
        padding: "0px"
    }

    const bar = (
        <div style={stDiv} onClick={() => setAppBarOpen(!isAppBarOpen)}>
            <div style={stDivBar}>
                <img src="/images/mobile_homebutton.png"></img>
            </div>
        </div>
    )

    const buttonPage = (
        <div style={stDivPage}>
            <ul style={stUlPage}>{props.buttons}</ul>
        </div>
    )

    return (<>{bar}{isAppBarOpen ? buttonPage : undefined}</>)
}
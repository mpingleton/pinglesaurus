import React from "react"

export default function Background(props: {
    background?: string,
    isMobile?: boolean
}) {

    let backgroundImage = "url('/images/backgrounds/home.png')"
    if (props.background !== undefined) {
        if (props.background === "software") {
            backgroundImage = "url('/images/backgrounds/software.png')"
        } else if (props.background === "3dprinting") {
            backgroundImage = "url('/images/backgrounds/printing.png')"
        } else if (props.background === "gallery") {
            backgroundImage = "url('/images/backgrounds/gallery.png')"
        } else if (props.background === "blog") {
            backgroundImage = "url('/images/backgrounds/blog.png')"
        } else if (props.background === "updates") {
            backgroundImage = "url('/images/backgrounds/updates.png')"
        }
    }

    const st: React.CSSProperties = {
        position: "fixed",
        zIndex: 0,
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage,
        animationName: "mainlayout_background_appear",
        animationDuration: "1s"
    }

    return (<div style={st}></div>)
}
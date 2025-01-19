import React, { useState } from "react"

import Header from "../components/atomic/Header"
import MobileAppBar from "../components/atomic/MobileAppBar"
import MobileAppBarButton from "../components/atomic/MobileAppBarButton"
import Body from "../components/atomic/Body"

export default function MobileLayout(props: { navId?: string, title: string, children?: React.ReactNode }) {

    document.title = `${props.title} - Pinglesaur.us`

    const buttons = [
        (<MobileAppBarButton title="Home" href="/" highlighted={props.navId === "home"} />),
        (<MobileAppBarButton title="Software Projects" href="/software" highlighted={props.navId === "software"} />),
        (<MobileAppBarButton title="3D Printing" href="/3dprinting" highlighted={props.navId === "3dprinting"} />),
        (<MobileAppBarButton title="Gallery" href="/gallery" highlighted={props.navId === "gallery"} />),
        (<MobileAppBarButton title="Blog" href="/blog" highlighted={props.navId === "blog"} />),
        (<MobileAppBarButton title="Updates" href="/updates" highlighted={props.navId === "updates"} />),
        (<MobileAppBarButton title="Contact" href="/contact" highlighted={props.navId === "contact"} />),
    ]

    return (
        <>
            <MobileAppBar buttons={buttons} />
            <Header />
            <Body>{props.children}</Body>
        </>
    );
}
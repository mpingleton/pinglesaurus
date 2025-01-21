import React from "react"

import Header from "../components/atomic/Header"
import HeaderText from "../components/atomic/HeaderText"
import AppBar from "../components/atomic/AppBar"
import AppBarButton from "../components/atomic/AppBarButton"
import AppBarHomeButton from "../components/atomic/AppBarHomeButton"
import Body from "../components/atomic/Body"
import Background from "../components/atomic/Background"
import Panel from "../components/atomic/Panel"
import VStack from "../components/atomic/VStack"
import Box from "../components/atomic/Box"

export default function MainLayout(props: {
    navId?: string,
    background?: string,
    title: string,
    loading?: boolean,
    children?: React.ReactNode
}) {

    document.title = `${props.title} - Pinglesaur.us`

    const appBarHome = (<AppBarHomeButton href="/" highlighted={props.navId === "home"} />)

    const appBarLeft = [
        (<AppBarButton title="Software Projects" href="/software" highlighted={props.navId === "software"} />),
        (<AppBarButton title="3D Printing" href="/3dprinting" highlighted={props.navId === "3dprinting"} />),
        (<AppBarButton title="Gallery" href="/gallery" highlighted={props.navId === "gallery"} />)
    ]

    const appBarRight = [
        (<AppBarButton title="Blog" href="/blog" highlighted={props.navId === "blog"} />),
        (<AppBarButton title="Updates" href="/updates" highlighted={props.navId === "updates"} />),
        (<AppBarButton title="Contact" href="/contact" highlighted={props.navId === "contact"} />)
    ]

    const loadingPanel = (
        <VStack justifyContent="center" justifyItems="center">
            <Panel>
                <HeaderText centered>Loading...</HeaderText>
            </Panel>
        </VStack>
    )

    return (
        <>
            <Background background={props.background ? props.background : props.navId} isMobile={false} />
            <Header />
            <AppBar center={appBarHome} leftSide={appBarLeft} rightSide={appBarRight} />
            <Body width="92%">{props.loading ? loadingPanel : props.children}</Body>
        </>
    )
}
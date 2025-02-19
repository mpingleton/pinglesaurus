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

import FooterPanel from "../components/molecular/FooterPanel"

export default function MainLayout(props: {
    navId?: string,
    navFunc: (toUrl: string) => void,
    background?: string,
    title: string,
    loading?: boolean,
    modals?: React.ReactNode,
    children?: React.ReactNode
}) {

    document.title = `${props.title} - Pinglesaur.us`

    const appBarHome = (
        <AppBarHomeButton
            onClicc={() => props.navFunc("/")}
            highlighted={props.navId === "home"}
        />
    )

    const appBarLeft = [
        (
            <AppBarButton
                title="Software Projects"
                onClicc={() => props.navFunc("/software")}
                highlighted={props.navId === "software"}
            />
        ),
        (
            <AppBarButton
                title="3D Printing"
                onClicc={() => props.navFunc("/3dprinting")}
                highlighted={props.navId === "3dprinting"}
            />
        ),
        (
            <AppBarButton
                title="Gallery"
                onClicc={() => props.navFunc("/gallery")}
                highlighted={props.navId === "gallery"}
            />
        )
    ]

    const appBarRight = [
        (
            <AppBarButton
                title="Blog"
                onClicc={() => props.navFunc("/blog")}
                highlighted={props.navId === "blog"}
            />
        ),
        (
            <AppBarButton
                title="Updates"
                onClicc={() => props.navFunc("/updates")}
                highlighted={props.navId === "updates"}
            />
        ),
        (
            <AppBarButton
                title="Contact"
                onClicc={() => props.navFunc("/contact")}
                highlighted={props.navId === "contact"}
            />
        )
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
            {props.modals}
            <Background background={props.background ? props.background : props.navId} isMobile={false} />
            <Header />
            <AppBar center={appBarHome} leftSide={appBarLeft} rightSide={appBarRight} />
            <Body width="92%" footer={<VStack><FooterPanel /></VStack>}>
                {props.loading ? loadingPanel : props.children}
            </Body>
        </>
    )
}
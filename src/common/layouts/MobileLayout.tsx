import React from "react"

import Background from "../components/atomic/Background"
import Header from "../components/atomic/Header"
import VStack from "../components/atomic/VStack"
import MobileAppBar from "../components/atomic/MobileAppBar"
import MobileAppBarButton from "../components/atomic/MobileAppBarButton"
import Body from "../components/atomic/Body"
import Panel from "../components/atomic/Panel"
import HeaderText from "../components/atomic/HeaderText"
import FooterPanel from "../components/molecular/FooterPanel"

export default function MobileLayout(props: {
    navId?: string,
    navFunc: (toUrl: string) => void,
    background?: string,
    title: string,
    loading?: boolean,
    modals?: React.ReactNode,
    children?: React.ReactNode
}) {

    document.title = `${props.title} - Pinglesaur.us`

    const buttons = [
        (
            <MobileAppBarButton
                title="Home"
                onClicc={() => props.navFunc("/")}
                highlighted={props.navId === "home"}
            />
        ),
        (
            <MobileAppBarButton
                title="Software Projects"
                onClicc={() => props.navFunc("/software")}
                highlighted={props.navId === "software"}
            />
        ),
        (
            <MobileAppBarButton
                title="3D Printing"
                onClicc={() => props.navFunc("/3dprinting")}
                highlighted={props.navId === "3dprinting"}
            />
        ),
        (
            <MobileAppBarButton
                title="Gallery"
                onClicc={() => props.navFunc("/gallery")}
                highlighted={props.navId === "gallery"}
            />
        ),
        (
            <MobileAppBarButton
                title="Blog"
                onClicc={() => props.navFunc("/blog")}
                highlighted={props.navId === "blog"}
            />
        ),
        (
            <MobileAppBarButton
                title="Updates"
                onClicc={() => props.navFunc("/updates")}
                highlighted={props.navId === "updates"}
            />
        ),
        (
            <MobileAppBarButton
                title="Contact"
                onClicc={() => props.navFunc("/contact")}
                highlighted={props.navId === "contact"}
            />
        ),
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
            <Background background={props.background ? props.background : props.navId} isMobile={true} />
            <MobileAppBar buttons={buttons} />
            <Header />
            <Body footer={<VStack><FooterPanel /></VStack>}>
                {props.loading ? loadingPanel : props.children}
            </Body>
        </>
    );
}
import React from "react"
import { isMobile, isBrowser } from "react-device-detect"

import MainLayout from "./MainLayout"
import MobileLayout from "./MobileLayout"

export default function AutomaticLayout(props: {
    navId?: string,
    background?: string,
    title: string,
    children?: React.ReactNode
}) {

    if (isMobile) {
        return (
            <MobileLayout
                navId={props.navId}
                background={props.background}
                title={props.title}
            >
                {props.children}
            </MobileLayout>
        )
    }

    return (
        <MainLayout
            navId={props.navId}
            background={props.background}
            title={props.title}
        >
            {props.children}
        </MainLayout>
    )
}
import React from "react"
import { isMobile, isBrowser } from "react-device-detect"

import MainLayout from "./MainLayout"
import MobileLayout from "./MobileLayout"

export default function AutomaticLayout(props: {
    navId?: string,
    background?: string,
    title: string,
    desktopLayout?: React.ReactNode,
    mobileLayout?: React.ReactNode,
    loading?: boolean
}) {

    if (isMobile) {
        if (props.loading) {
            return (
                <MobileLayout
                    navId={props.navId}
                    background={props.background}
                    title={props.title}
                    loading
                />
            )
        }

        return (
            <MobileLayout
                navId={props.navId}
                background={props.background}
                title={props.title}
            >
                {props.mobileLayout ? props.mobileLayout! : props.desktopLayout!}
            </MobileLayout>
        )
    } else {
        if (props.loading) {
            return (
                <MainLayout
                    navId={props.navId}
                    background={props.background}
                    title={props.title}
                    loading
                />
            )
        }

        return (
            <MainLayout
                navId={props.navId}
                background={props.background}
                title={props.title}
            >
                {props.desktopLayout!}
            </MainLayout>
        )
    }

    return null
}
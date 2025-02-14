import React from "react"
import { isMobile, isBrowser } from "react-device-detect"

import VStack from "../atomic/VStack"
import BodyText from "../atomic/BodyText"
import SubtleText from "../atomic/SubtleText"

import ConfirmationModal from "./ConfirmationModal"
import XStack from "./XStack"

export default function RedirectModal(props: {
    isOpen: boolean,
    onClose: () => void,
    onProceed: () => void,
    isMobile: boolean,
    siteName: string,
    siteUrl: string,
    siteIcon: React.ReactNode
}) {

    return (
        <ConfirmationModal
            isOpen={props.isOpen}
            onClose={props.onClose}
            onProceed={props.onProceed}
            isMobile={props.isMobile}
            title="External Redirect"
        >
            <XStack
                padding="0px"
                width="100%"
                horizontal={isBrowser}
                vertical={isMobile}
                justifyItems="center"
                justifyContent="center"
            >
                <XStack
                    width={props.isMobile ? "auto" : "100px"}
                    height={props.isMobile ? "48px" : "100px"}
                    horizontal={isBrowser}
                    vertical={isMobile}
                    justifyItems="center"
                    justifyContent="center"
                >
                    {props.siteIcon}
                </XStack>
                <VStack wrap>
                    <BodyText centered>
                        {`You will be redirected to ${props.siteName}, an external website.  Proceed?`}
                    </BodyText>
                    <SubtleText centered>{props.siteUrl}</SubtleText>
                </VStack>
            </XStack>
        </ConfirmationModal>
    )
}
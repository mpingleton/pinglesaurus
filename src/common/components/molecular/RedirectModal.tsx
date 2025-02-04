import React from "react"

import Box from "../atomic/Box"
import Panel from "../atomic/Panel"
import VStack from "../atomic/VStack"
import HStack from "../atomic/HStack"
import BodyText from "../atomic/BodyText"
import SubtleText from "../atomic/SubtleText"

import ConfirmationModal from "./ConfirmationModal"

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
        >
            <HStack padding="0px" width="100%">
                <VStack
                    width={props.isMobile ? "48px" : "100px"}
                    height={props.isMobile ? "48px" : "100px"}
                    justifyItems="center"
                    justifyContent="center"
                >
                    {props.siteIcon}
                </VStack>
                <VStack wrap>
                    <BodyText centered>{`You will be redirected to ${props.siteName}, an external website.  Proceed?`}</BodyText>
                    <SubtleText centered>{props.siteUrl}</SubtleText>
                </VStack>
            </HStack>
        </ConfirmationModal>
    )
}
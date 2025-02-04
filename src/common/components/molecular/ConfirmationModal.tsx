import React from "react"

import Modal from "../atomic/Modal"
import SectionPanel from "./SectionPanel"
import Panel from "../atomic/Panel"
import BodyText from "../atomic/BodyText"
import HStack from "../atomic/HStack"
import VStack from "../atomic/VStack"
import Box from "../atomic/Box"

export default function ConfirmationModal(props: {
    isOpen: boolean,
    onClose: () => void,
    onProceed: () => void,
    isMobile: boolean,
    children: React.ReactNode
}) {

    const width = props.isMobile ? "100%" : "650px"
    const height = "300px"

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} width={width} height={height}>
            <SectionPanel
                title="External Redirect"
                width="100%"
                height="100%"
            >
                <VStack height="100%" width="100%" padding="0px">
                    {props.children}
                    <Box height="100%" />
                    <HStack padding="0px" width="100%" justifyContent="right" justifyItems="right">
                        <Panel
                            width={props.isMobile ? "50%" : "25%"}
                            cliccable
                            onClicc={() => props.onClose()}
                        >
                            <BodyText centered>Cancel</BodyText>
                        </Panel>
                        <Panel
                            width={props.isMobile ? "50%" : "25%"}
                            focused
                            cliccable
                            onClicc={() => props.onProceed()}
                        >
                            <BodyText centered>Proceed</BodyText>
                        </Panel>
                    </HStack>
                </VStack>
            </SectionPanel>
        </Modal>
    )
}
import React from "react"

import Box from "../atomic/Box"
import Modal from "../atomic/Modal"
import SectionPanel from "./SectionPanel"
import Panel from "../atomic/Panel"
import BodyText from "../atomic/BodyText"
import HStack from "../atomic/HStack"
import VStack from "../atomic/VStack"

export default function ConfirmationModal(props: {
    isOpen: boolean,
    onClose: () => void,
    onProceed: () => void,
    isMobile: boolean,
    children: React.ReactNode
}) {

    const [isLoading, setLoading] = React.useState(false)

    function handleProceed() {
        setLoading(true)
        props.onProceed()
    }

    function handleClose() {
        setLoading(false)
        props.onClose()
    }

    const buttons = [
        (
            <Panel
                width={props.isMobile ? "50%" : "25%"}
                cliccable
                onClicc={() => props.onClose()}
            >
                <BodyText centered>Cancel</BodyText>
            </Panel>
        ),
        (
            <Panel
                width={props.isMobile ? "50%" : "25%"}
                focused
                cliccable
                onClicc={() => handleProceed()}
            >
                <BodyText centered>Proceed</BodyText>
            </Panel>
        )
    ]

    const loading = (
        <Panel width={props.isMobile ? "50%" : "25%"}>
            <BodyText centered>Loading...</BodyText>
        </Panel>
    )

    const width = props.isMobile ? "100%" : "600px"
    const height = props.isMobile ? "50%" : "275px"

    return (
        <Modal isOpen={props.isOpen} onClose={handleClose} width={width} height={height}>
            <SectionPanel
                title="External Redirect"
                width="100%"
                height="100%"
            >
                <VStack height="100%" width="100%" padding="0px">
                    {props.children}
                    <Box height="100%" />
                    <HStack padding="0px" width="100%" justifyContent="right" justifyItems="right">
                        {isLoading ? loading : buttons}
                    </HStack>
                </VStack>
            </SectionPanel>
        </Modal>
    )
}
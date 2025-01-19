import React from "react"

import VStack from "../../../common/components/atomic/VStack"
import HeaderText from "../../../common/components/atomic/HeaderText"
import BodyText from "../../../common/components/atomic/BodyText"
import Image from "../../../common/components/atomic/Image"
import Panel from "../../../common/components/atomic/Panel"

import XStack from "../../../common/components/molecular/XStack"

import SoftwareProject from "../../../classes/SoftwareProject"

export default function SoftwareProjectProfile(props: { data: SoftwareProject, isMobile: boolean }) {

    const mainPanel = (
        <Panel>
            <XStack horizontal={!props.isMobile} vertical={props.isMobile}>
                <Image
                    bordered
                    width="120px"
                    height="120px"
                    centered={props.isMobile}
                    url={props.data.iconUrl}
                    alt={props.data.name}
                />
                <VStack>
                    <HeaderText centered={props.isMobile}>{props.data.name}</HeaderText>
                    <BodyText centered={props.isMobile}>{props.data.fullDesc}</BodyText>
                </VStack>
            </XStack>
        </Panel>
    )

    return (
        <VStack padding="0px" width="100%">
            {mainPanel}
        </VStack>
    )
}
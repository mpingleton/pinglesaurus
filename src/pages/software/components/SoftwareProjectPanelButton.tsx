import React from "react"

import VStack from "../../../common/components/atomic/VStack"
import HStack from "../../../common/components/atomic/HStack"
import BodyText from "../../../common/components/atomic/BodyText"
import SubtitleText from "../../../common/components/atomic/SubtitleText"
import Image from "../../../common/components/atomic/Image"

import Panel from "../../../common/components/atomic/Panel"

import SoftwareProject from "../../../classes/SoftwareProject"

export default function SoftwareProjectPanelButton(props: {
    data: SoftwareProject,
    onClicc?: () => void
}) {

    return (
        <Panel cliccable onClicc={props.onClicc}>
            <HStack padding="0px">
                <Image
                    bordered
                    width="48px"
                    height="48px"
                    alt={props.data.name}
                    url={props.data.iconUrl}
                />
                <VStack padding="0px">
                    <BodyText>{props.data.name}</BodyText>
                    <SubtitleText>{props.data.shortDesc}</SubtitleText>
                </VStack>
            </HStack>
        </Panel>
    )
}
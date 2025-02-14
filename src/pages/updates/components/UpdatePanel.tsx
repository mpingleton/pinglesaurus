import React from "react"

import VStack from "../../../common/components/atomic/VStack"
import SubtitleText from "../../../common/components/atomic/SubtitleText"
import BodyText from "../../../common/components/atomic/BodyText"

import SectionPanel from "../../../common/components/molecular/SectionPanel"

import Update from "../../../classes/Update"

export default function UpdatePanel(props: { data: Update }) {

    const l = (
        <VStack>
            <SubtitleText>{props.data.timestamp.toLocaleString()}</SubtitleText>
            <BodyText>{props.data.text}</BodyText>
        </VStack>
    )

    return (<SectionPanel title={props.data.headline}>{l}</SectionPanel>)
}
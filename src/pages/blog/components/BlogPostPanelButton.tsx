import React from "react"

import VStack from "../../../common/components/atomic/VStack"
import HStack from "../../../common/components/atomic/HStack"
import BodyText from "../../../common/components/atomic/BodyText"
import SubtitleText from "../../../common/components/atomic/SubtitleText"
import Image from "../../../common/components/atomic/Image"

import Panel from "../../../common/components/atomic/Panel"

import BlogPost from "../../../classes/BlogPost"

export default function BlogPostPanelButton(props: {
    data: BlogPost,
    onClicc?: () => void
}) {

    return (
        <Panel cliccable onClicc={props.onClicc}>
            <HStack padding="0px">
                <VStack padding="0px">
                    <BodyText>{props.data.title}</BodyText>
                    <SubtitleText>{props.data.subtitle}</SubtitleText>
                </VStack>
            </HStack>
        </Panel>
    )
}
import React from "react"

import TitleText from "../../../common/components/atomic/TitleText"
import VStack from "../../../common/components/atomic/VStack"
import SubtitleText from "../../../common/components/atomic/SubtitleText"
import BodyText from "../../../common/components/atomic/BodyText"
import Panel from "../../../common/components/atomic/Panel"

import BlogPostDisplaySection from "./BlogPostDisplaySection"

import BlogPost from "../../../classes/BlogPost"

export default function BlogPostDisplay(props: {
    data: BlogPost,
    isMobile: boolean,
    onBackClicc: () => void
}) {

    return (
        <VStack padding="0px" width="100%">
            {props.isMobile ? (
                <Panel cliccable onClicc={props.onBackClicc}>
                    <BodyText>&#8592; Back</BodyText>
                </Panel>
            ) : undefined}
            <Panel>
                <VStack padding="0px" width="100%" gapping="16px">
                    <TitleText centered>{props.data.title}</TitleText>
                    <BodyText centered>{props.data.subtitle}</BodyText>
                    <SubtitleText centered>{props.data.published.toLocaleDateString()}</SubtitleText>
                    {props.data.sections!.map((s) => (
                        <BlogPostDisplaySection isMobile={props.isMobile} data={s} />
                    ))}
                </VStack>
            </Panel>
        </VStack>
    )
}
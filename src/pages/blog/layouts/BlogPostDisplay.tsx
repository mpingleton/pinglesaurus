import React from "react"

import VStack from "../../../common/components/atomic/VStack"
import HeaderText from "../../../common/components/atomic/HeaderText"
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
                    <HeaderText centered>{props.data.title}</HeaderText>
                    <BodyText centered>{props.data.subtitle}</BodyText>
                    {props.data.sections!.map((s) => (<BlogPostDisplaySection data={s} />))}
                </VStack>
            </Panel>
        </VStack>
    )
}
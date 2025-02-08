import React from "react"

import VStack from "../../../common/components/atomic/VStack"
import HeaderText from "../../../common/components/atomic/HeaderText"
import BodyText from "../../../common/components/atomic/BodyText"
import Panel from "../../../common/components/atomic/Panel"
import HDivider from "../../../common/components/atomic/HDivider"

import BlogPostParagraphParticle from "../components/BlogPostParagraphParticle"
import BlogPostImageParticle from "../components/BlogPostImageParticle"

import BlogPost from "../../../classes/BlogPost"
import BlogParagraph from "../../../classes/BlogParagraph"
import BlogImage from "../../../classes/BlogImage"

export default function BlogPostDisplay(props: {
    data: BlogPost,
    isMobile: boolean,
    onBackClicc: () => void
}) {

    const particles = props.data.particles!.map((p) => {
        if (p.getType() === "PARAGRAPH_PARTICLE") {
            return (<BlogPostParagraphParticle data={p as BlogParagraph} />)
        } else if (p.getType() === "IMAGE_PARTICLE") {
            return (<BlogPostImageParticle data={p as BlogImage} />)
        } else {
            return (<BodyText>Error</BodyText>)
        }
    })

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
                    <HDivider />
                    <VStack width="100%" gapping="30px">{particles}</VStack>
                </VStack>
            </Panel>
        </VStack>
    )
}
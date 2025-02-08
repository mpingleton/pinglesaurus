import React from "react"

import VStack from "../../../common/components/atomic/VStack"
import HeaderText from "../../../common/components/atomic/HeaderText"
import BodyText from "../../../common/components/atomic/BodyText"
import HDivider from "../../../common/components/atomic/HDivider"

import BlogSection from "../../../classes/BlogSection"
import BlogParagraph from "../../../classes/BlogParagraph"
import BlogImage from "../../../classes/BlogImage"

import BlogPostParagraphParticle from "../components/BlogPostParagraphParticle"
import BlogPostImageParticle from "../components/BlogPostImageParticle"

export default function BlogPostDisplaySection(props: { data: BlogSection }) {

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
        <VStack width="100%" gapping="30px">
            <HDivider />
            <HeaderText>{props.data.title}</HeaderText>
            {particles}
        </VStack>)
}
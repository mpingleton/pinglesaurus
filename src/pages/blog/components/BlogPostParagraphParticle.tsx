import React from "react"

import Box from "../../../common/components/atomic/Box"
import VStack from "../../../common/components/atomic/VStack"
import BodyText from "../../../common/components/atomic/BodyText"

import BlogParagraph from "../../../classes/BlogParagraph"

export default function BlogPostParagraphParticle(props: { isMobile: boolean, data: BlogParagraph }) {

    return (
        <VStack>
            <Box width={props.isMobile ? "95%" : "98%"}>
                <BodyText justified>{props.data.text}</BodyText>
            </Box>
        </VStack>
    )
}
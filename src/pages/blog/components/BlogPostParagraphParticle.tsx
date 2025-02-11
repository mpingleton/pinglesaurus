import React from "react"

import Box from "../../../common/components/atomic/Box"
import VStack from "../../../common/components/atomic/VStack"
import BodyText from "../../../common/components/atomic/BodyText"

import BlogParagraph from "../../../classes/BlogParagraph"

export default function BlogPostParagraphParticle(props: { data: BlogParagraph }) {

    return (
        <VStack>
            <Box width="98%">
                <BodyText>{props.data.text}</BodyText>
            </Box>
        </VStack>
    )
}
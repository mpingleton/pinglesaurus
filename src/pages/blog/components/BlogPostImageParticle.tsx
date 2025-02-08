import React from "react"

import VStack from "../../../common/components/atomic/VStack"
import Image from "../../../common/components/atomic/Image"
import SubtitleText from "../../../common/components/atomic/SubtitleText"

import BlogImage from "../../../classes/BlogImage"

export default function BlogPostImageParticle(props: { data: BlogImage }) {

    return (
        <VStack padding="0px" width="100%">
            <Image
                url={props.data.url}
                alt={props.data.caption}
                height="400px"
                centered
                bordered
            />
            <SubtitleText centered>{props.data.caption}</SubtitleText>
        </VStack>
    )
}
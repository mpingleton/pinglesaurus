import React from "react"

import VStack from "../../../common/components/atomic/VStack"
import Image from "../../../common/components/atomic/Image"
import SubtitleText from "../../../common/components/atomic/SubtitleText"

import BlogImage from "../../../classes/BlogImage"

export default function BlogPostImageParticle(props: { isMobile: boolean, data: BlogImage }) {

    return (
        <VStack padding="0px" width="100%">
            <Image
                url={props.data.url}
                alt={props.data.caption}
                height={props.isMobile ? "auto" : "400px"}
                width={props.isMobile ? "95%" : "auto"}
                centered={!props.isMobile}
                bordered
            />
            <SubtitleText centered>{props.data.caption}</SubtitleText>
        </VStack>
    )
}
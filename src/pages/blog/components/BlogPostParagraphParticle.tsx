import React from "react"

import BodyText from "../../../common/components/atomic/BodyText"

import BlogParagraph from "../../../classes/BlogParagraph"

export default function BlogPostParagraphParticle(props: { data: BlogParagraph }) {

    return (<BodyText>{props.data.text}</BodyText>)
}
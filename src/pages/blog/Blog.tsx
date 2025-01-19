import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import TitleText from "../../common/components/atomic/TitleText"

export default function Blog() {

    return (
        <AutomaticLayout navId="blog" title="Blog">
            <TitleText centered>Blog (Under Construction)</TitleText>
        </AutomaticLayout>
    )
}
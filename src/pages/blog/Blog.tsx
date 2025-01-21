import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import TitleText from "../../common/components/atomic/TitleText"

export default function Blog() {

    const desktopLayout = (<TitleText centered>Blog (Under Construction)</TitleText>)

    return (
        <AutomaticLayout
            navId="blog"
            title="Blog"
            desktopLayout={desktopLayout}
        />
    )
}
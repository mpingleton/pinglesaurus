import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import TitleText from "../../common/components/atomic/TitleText"

export default function Gallery() {

    const desktopLayout= (<TitleText centered>Gallery (Under Construction)</TitleText>)

    return (
        <AutomaticLayout
            navId="gallery"
            title="Gallery"
            desktopLayout={desktopLayout}
        />
    )
}
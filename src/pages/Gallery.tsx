import React from "react"

import AutomaticLayout from "../layouts/AutomaticLayout"

import TitleText from "../components/atomic/TitleText"

export default function Gallery() {

    return (
        <AutomaticLayout navId="gallery" title="Gallery">
            <TitleText centered>Gallery (Under Construction)</TitleText>
        </AutomaticLayout>
    )
}
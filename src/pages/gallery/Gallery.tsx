import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import BodyText from "../../common/components/atomic/BodyText"
import VStack from "../../common/components/atomic/VStack"
import SectionPanel from "../../common/components/molecular/SectionPanel"

export default function Gallery() {

    const desktopLayout= (
        <VStack>
            <SectionPanel title="Gallery">
                <BodyText centered>There are currently no photos to display.  Please check back here later.</BodyText>
            </SectionPanel>
        </VStack>
    )

    return (
        <AutomaticLayout
            navId="gallery"
            title="Gallery"
            desktopLayout={desktopLayout}
        />
    )
}
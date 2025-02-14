import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import BodyText from "../../common/components/atomic/BodyText"
import VStack from "../../common/components/atomic/VStack"
import SectionPanel from "../../common/components/molecular/SectionPanel"

import DataContext from "../../classes/DataContext"

export default function Gallery(props: {
    ctx: DataContext,
    navFunc: (toUrl: string) => void
}) {

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
            navFunc={props.navFunc}
        />
    )
}
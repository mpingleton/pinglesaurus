import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import BodyText from "../../common/components/atomic/BodyText"
import VStack from "../../common/components/atomic/VStack"
import SectionPanel from "../../common/components/molecular/SectionPanel"

export default function Prints() {

    const desktopLayout = (
        <VStack>
            <SectionPanel title="3D Printing">
                <BodyText centered>There are currently no 3D printing projects to display.  Please check back here later.</BodyText>
            </SectionPanel>
        </VStack>
    )

    return (
        <AutomaticLayout
            navId="3dprinting"
            title="3D Printing"
            desktopLayout={desktopLayout}
        />
    )
}
import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import UnderConstructionPanel from "../../common/components/molecular/UnderConstructionPanel"

export default function Gallery() {

    const desktopLayout= (<UnderConstructionPanel />)

    return (
        <AutomaticLayout
            navId="gallery"
            title="Gallery"
            desktopLayout={desktopLayout}
        />
    )
}
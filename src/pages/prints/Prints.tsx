import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import UnderConstructionPanel from "../../common/components/molecular/UnderConstructionPanel"

export default function Prints() {

    const desktopLayout = (<UnderConstructionPanel />)

    return (
        <AutomaticLayout
            navId="3dprinting"
            title="3D Printing"
            desktopLayout={desktopLayout}
        />
    )
}
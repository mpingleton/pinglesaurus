import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import UnderConstructionPanel from "../../common/components/molecular/UnderConstructionPanel"

export default function Updates() {

    const desktopLayout = (<UnderConstructionPanel />)

    return (
        <AutomaticLayout
            navId="updates"
            title="Updates"
            desktopLayout={desktopLayout}
        />
    )
}
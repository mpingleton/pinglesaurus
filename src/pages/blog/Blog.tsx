import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import UnderConstructionPanel from "../../common/components/molecular/UnderConstructionPanel"

export default function Blog() {

    const desktopLayout = (<UnderConstructionPanel />)

    return (
        <AutomaticLayout
            navId="blog"
            title="Blog"
            desktopLayout={desktopLayout}
        />
    )
}
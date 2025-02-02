import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import UnderConstructionPanel from "../../common/components/molecular/UnderConstructionPanel"

export default function Contact() {

    const desktopLayout = (<UnderConstructionPanel />)

    return (
        <AutomaticLayout
            navId="contact"
            title="Contact"
            desktopLayout={desktopLayout}
        />
    )
}
import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import TitleText from "../../common/components/atomic/TitleText"

export default function Updates() {

    const desktopLayout = (<TitleText centered>Updates (Under Construction)</TitleText>)

    return (
        <AutomaticLayout
            navId="updates"
            title="Updates"
            desktopLayout={desktopLayout}
        />
    )
}
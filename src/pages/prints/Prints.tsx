import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import TitleText from "../../common/components/atomic/TitleText"

export default function Prints() {

    const desktopLayout = (<TitleText centered>3D Printing (Under Construction)</TitleText>)

    return (
        <AutomaticLayout
            navId="3dprinting"
            title="3D Printing"
            desktopLayout={desktopLayout}
        />
    )
}
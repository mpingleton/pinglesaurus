import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import TitleText from "../../common/components/atomic/TitleText"

export default function Contact() {

    const desktopLayout = (<TitleText centered>Contact (Under Construction)</TitleText>)

    return (
        <AutomaticLayout
            navId="contact"
            title="Contact"
            desktopLayout={desktopLayout}
        />
    )
}
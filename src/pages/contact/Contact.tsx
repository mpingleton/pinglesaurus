import React from "react"

import VStack from "../../common/components/atomic/VStack"
import BodyText from "../../common/components/atomic/BodyText"

import SectionPanel from "../../common/components/molecular/SectionPanel"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

export default function Contact() {

    const emailIntro1 = "If you wish to inquire about a project, report a bug, make a contribution, or suggest ideas, you may reach out to me at the following email address:"
    const emailIntro2 = "Additionally, when reporting bugs please include details about you encountered the bug and how to reproduce it."
    const emailAddress = "mnpingleton@gmail.com"

    const contactPanel = (
        <SectionPanel title="Contact Me">
            <VStack gapping="30px">
                <BodyText centered>{emailIntro1}</BodyText>
                <BodyText centered>{emailAddress}</BodyText>
                <BodyText centered>{emailIntro2}</BodyText>
            </VStack>
        </SectionPanel>
    )

    const desktopLayout = (<VStack>{contactPanel}</VStack>)

    return (
        <AutomaticLayout
            navId="contact"
            title="Contact"
            desktopLayout={desktopLayout}
        />
    )
}
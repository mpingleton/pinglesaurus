import React from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import VStack from "../../common/components/atomic/VStack"

import TitlePanel from "../../common/components/molecular/TitlePanel"
import HeaderContentPanel from "../../common/components/molecular/HeaderContentPanel"

export default function Privacy() {

    const titleIntroduction = "Introduction"
    const contentIntroduction = "The purpose of this privacy policy is to inform you of the way your data is collected, processed, and stored while using the pinglesaur.us website. It is important to employ responsible and ethical practices when handling user data."

    const p1Title = "Information You Give"
    const p1Content = "The information you may give includes the email address that you may optionally provide when using the contact form."

    const p2Title = "Logging"
    const p2Content = "Device data, such as IP addresses, may be logged upon accessing pinglesaur.us servers."

    const p3Title = "Third Parties"
    const p3Content = "Third-party servers are used to serve web content, as well as collect, process, and store data."

    const p4Title = "Cookies"
    const p4Content = "The pinglesaur.us website does not make use of cookies."

    return (
        <AutomaticLayout title="Privacy Policy">
            <VStack>
                <TitlePanel title="Privacy Policy" />
                <HeaderContentPanel header={titleIntroduction} content={contentIntroduction} />
                <HeaderContentPanel header={p1Title} content={p1Content} />
                <HeaderContentPanel header={p2Title} content={p2Content} />
                <HeaderContentPanel header={p3Title} content={p3Content} />
                <HeaderContentPanel header={p4Title} content={p4Content} />
            </VStack>
        </AutomaticLayout>
    )
}
import React from "react"
import { isMobile, BrowserView, MobileView } from "react-device-detect"

import Panel from "../atomic/Panel"
import SubtleText from "../atomic/SubtleText"
import Link from "../atomic/Link"
import HStack from "../atomic/HStack"
import VStack from "../atomic/VStack"
import VDivider from "../atomic/VDivider";

export default function FooterPanel() {

    const copyrightText = (<SubtleText centered={isMobile}>Copyright &copy; 2025 Michael Pingleton</SubtleText>)

    // const complianceInfo = (<Link href="/compliance"><SubtleText centered>Compliance</SubtleText></Link>)
    const privacyPolicy = (<Link href="/privacy"><SubtleText centered>Privacy</SubtleText></Link>)

    return (
        <>
            <BrowserView>
                <Panel>
                    <HStack padding="0px" justifyContent="space-between">
                        {copyrightText}
                        <HStack width="100%" gapping="24px" padding="0px" justifyContent="end">
                            <VDivider />
                            {privacyPolicy}
                            <VDivider />
                        </HStack>
                    </HStack>
                </Panel>
            </BrowserView>
            <MobileView>
                <Panel>
                    <VStack gapping="24px">
                        {copyrightText}
                        <HStack width="100%" padding="0px" justifyContent="space-evenly">
                            {privacyPolicy}
                        </HStack>
                    </VStack>
                </Panel>
            </MobileView>
        </>
    )
}
import React, { useState } from "react"

import Box from "../../../common/components/atomic/Box"
import VStack from "../../../common/components/atomic/VStack"
import HStack from "../../../common/components/atomic/HStack"
import Panel from "../../../common/components/atomic/Panel"
import Image from "../../../common/components/atomic/Image"
import BodyText from "../../../common/components/atomic/BodyText"

import SectionPanel from "../../../common/components/molecular/SectionPanel"
import XStack from "../../../common/components/molecular/XStack"

import SoftwareProject from "../../../classes/SoftwareProject"

export default function ScreenshotPanel(props: { data: SoftwareProject, isMobile: boolean }) {

    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const noScreenshots = (
        <SectionPanel title="Screenshots">
            <BodyText centered>There are currently no screenshots to display.</BodyText>
        </SectionPanel>
    )

    if (props.data.screenshots === undefined) {
        return noScreenshots
    } else if (props.data.screenshots.length === 0) {
        return noScreenshots
    }

    const image = (
        <Image
            url={props.data.screenshots[selectedIndex].imageUrl}
            alt={props.data.screenshots[selectedIndex].description}
            height={props.isMobile ? "auto" : "500px"}
            width={props.isMobile ? "100%" : "auto"}
            bordered
        />
    )

    const selector = (
        <VStack
            width="100%"
            height="100%"
            justifyContent="space-between"
            justifyItems="space-between"
            padding="0px"
        >
            <BodyText centered>
                {`${selectedIndex + 1} / ${props.data.screenshots.length}`}
            </BodyText>
            <BodyText centered>
                {props.data.screenshots[selectedIndex].description}
            </BodyText>
            <HStack justifyItems="center" justifyContent="center">
                <Panel
                    cliccable={selectedIndex > 0}
                    onClicc={() => setSelectedIndex(selectedIndex - 1)}
                >
                    <BodyText centered>Prev</BodyText>
                </Panel>
                {!props.isMobile ? (<Box width="100%"> </Box>) : undefined}
                <Panel
                    cliccable={selectedIndex + 1 < props.data.screenshots.length}
                    onClicc={() => setSelectedIndex(selectedIndex + 1)}
                >
                    <BodyText centered>Next</BodyText>
                </Panel>
            </HStack>
        </VStack>
    )

    return (
        <SectionPanel title="Screenshots">
            <XStack horizontal={!props.isMobile} vertical={props.isMobile} padding="0px">
                {image}
                {selector}
            </XStack>
        </SectionPanel>
    )
}
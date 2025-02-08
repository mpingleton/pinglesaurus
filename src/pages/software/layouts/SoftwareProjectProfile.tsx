import React from "react"

import VStack from "../../../common/components/atomic/VStack"
import TitleText from "../../../common/components/atomic/TitleText"
import HeaderText from "../../../common/components/atomic/HeaderText"
import BodyText from "../../../common/components/atomic/BodyText"
import Image from "../../../common/components/atomic/Image"
import Panel from "../../../common/components/atomic/Panel"

import XStack from "../../../common/components/molecular/XStack"
import SectionPanel from "../../../common/components/molecular/SectionPanel"

import SoftwareProject from "../../../classes/SoftwareProject"
import TechStackPanel from "../../../common/components/molecular/TechStackPanel"

export default function SoftwareProjectProfile(props: {
    data: SoftwareProject,
    isMobile: boolean,
    onBackClicc: () => void
}) {

    const mainPanel = (
        <Panel>
            <XStack horizontal={!props.isMobile} vertical={props.isMobile}>
                <Image
                    bordered
                    width="120px"
                    height="120px"
                    centered={props.isMobile}
                    url={props.data.iconUrl}
                    alt={props.data.name}
                />
                <VStack>
                    <TitleText centered={props.isMobile}>{props.data.name}</TitleText>
                    <BodyText centered={props.isMobile}>{props.data.fullDesc}</BodyText>
                </VStack>
            </XStack>
        </Panel>
    )

    const downloadPanel = (
        <SectionPanel title="Download Links">
            <BodyText centered>Under Construction</BodyText>
        </SectionPanel>
    )

    const stackPanel = (
        <TechStackPanel
            languages={props.data.languages!}
            platforms={props.data.platforms!}
            frameworks={props.data.frameworks!}
        />
    )

    const updatePanel = (
        <SectionPanel title="Latest Update">
            <BodyText centered>Under Construction</BodyText>
        </SectionPanel>
    )

    const screenshotPanel = (
        <SectionPanel title="Screenshots">
            <BodyText centered>Under Construction</BodyText>
        </SectionPanel>
    )

    return (
        <VStack padding="0px" width="100%">
            {props.isMobile ? (
                <Panel cliccable onClicc={props.onBackClicc}>
                    <BodyText>&#8592; Back</BodyText>
                </Panel>
            ) : undefined}
            {mainPanel}
            <XStack horizontal={!props.isMobile} vertical={props.isMobile} padding="0px">
                <VStack padding="0px" width={props.isMobile ? "100%" : "500px"}>
                    {downloadPanel}
                    {updatePanel}
                    {stackPanel}
                </VStack>
                {screenshotPanel}
            </XStack>
        </VStack>
    )
}
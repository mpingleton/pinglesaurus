import React from "react"

import Panel from "../components/atomic/Panel"
import Image from "../components/atomic/Image"
import Badge from "../components/atomic/Badge"
import TitleText from "../components/atomic/TitleText"
import BodyText from "../components/atomic/BodyText"

import TitlePanel from "../components/molecular/TitlePanel"
import LinkPanel from "../components/molecular/LinkPanel"
import VStack from "../components/atomic/VStack"
import HStack from "../components/atomic/HStack"
import XStack from "../components/molecular/XStack"

import projects from "../projects.json"

export default function Projects(props: { isMobile: boolean }) {

    const projectLinks = projects.map((project) => {
        const platformBadges = project.platforms.map((platform) => (
            <Badge badgeColor="black" textColor="lightgray" text={platform} />
        ))

        return (
            <LinkPanel href={props.isMobile === true ? `/mobile/projects/id/${project.id}` : `/projects/id/${project.id}`}>
                <XStack horizontal={!props.isMobile} vertical={props.isMobile}>
                    <HStack width={props.isMobile ? "100%" : "auto"} justifyItems="center" justifyContent="center">
                        <Image bordered url={project.iconUrl} alt="App Icon" width="150px" height="150px" />
                    </HStack>
                    <VStack width={props.isMobile ? "auto" : "100%"}>
                        <XStack horizontal={!props.isMobile} vertical={props.isMobile}>
                            <TitleText centered={props.isMobile}>{project.name}</TitleText>
                            <Badge badgeColor="#555555" textColor="#EEEEEE" text={project.versionLabel} />
                        </XStack>
                        <XStack horizontal={!props.isMobile} vertical={props.isMobile}>
                            <BodyText centered={props.isMobile}>{project.shortDescription}</BodyText>
                            <HStack
                                justifyContent={props.isMobile ? "center" : "left"}
                                justifyItems={props.isMobile ? "center" : "left"}
                            >
                                {platformBadges}
                            </HStack>
                        </XStack>
                    </VStack>
                </XStack>
            </LinkPanel>
        )
    })

    return (
        <VStack>
            <TitlePanel title="Projects" />
            {projectLinks}
        </VStack>
    )
}
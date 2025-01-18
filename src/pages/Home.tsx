import React from "react"
import { isBrowser, isMobile } from "react-device-detect"

import TitleText from "../components/atomic/TitleText"
import BodyText from "../components/atomic/BodyText"
import VStack from "../components/atomic/VStack"
import HStack from "../components/atomic/HStack"
import Panel from "../components/atomic/Panel"
import Badge from "../components/atomic/Badge"

import XStack from "../components/molecular/XStack"
import ProfileImage from "../components/molecular/ProfileImage"

import AutomaticLayout from "../layouts/AutomaticLayout"

export default function Home() {

    const badgeContent = (
        <VStack width="100%" gapping="2px">
            <HStack width="100%" justifyItems="center" justifyContent="center" padding="0px" gapping="2px">
                <Badge badgeColor="black" textColor="lightgray" text="C" />
                <Badge badgeColor="black" textColor="lightgray" text="C++" />
                <Badge badgeColor="black" textColor="lightgray" text="Java" />
                <Badge badgeColor="black" textColor="lightgray" text="Kotlin" />
                <Badge badgeColor="black" textColor="lightgray" text="Swift" />
                <Badge badgeColor="black" textColor="lightgray" text="JavaScript" />
                <Badge badgeColor="black" textColor="lightgray" text="TypeScript" />
                <Badge badgeColor="black" textColor="lightgray" text="Python" />
                <Badge badgeColor="black" textColor="lightgray" text="HTML" />
                <Badge badgeColor="black" textColor="lightgray" text="CSS" />
            </HStack>
            <HStack width="100%" justifyItems="center" justifyContent="center" padding="0px" gapping="2px">
                <Badge badgeColor="black" textColor="lightgray" text="React" />
                <Badge badgeColor="black" textColor="lightgray" text="NodeJS" />
                <Badge badgeColor="black" textColor="lightgray" text="Vulkan" />
                <Badge badgeColor="black" textColor="lightgray" text="OpenGL" />
                <Badge badgeColor="black" textColor="lightgray" text="Sequelize" />
                <Badge badgeColor="black" textColor="lightgray" text="Prisma ORM" />
                <Badge badgeColor="black" textColor="lightgray" text="ExpressJS" />
                <Badge badgeColor="black" textColor="lightgray" text="CUDA" />
            </HStack>
            <HStack width="100%" justifyItems="center" justifyContent="center" padding="0px" gapping="2px">
                <Badge badgeColor="black" textColor="lightgray" text="iOS" />
                <Badge badgeColor="black" textColor="lightgray" text="Android" />
                <Badge badgeColor="black" textColor="lightgray" text="Windows" />
                <Badge badgeColor="black" textColor="lightgray" text="Mac" />
                <Badge badgeColor="black" textColor="lightgray" text="Linux" />
                <Badge badgeColor="black" textColor="lightgray" text="Web" />
            </HStack>
        </VStack>
    )

    const homepageContent = (
        <VStack justifyItems="center" width="100%" gapping="14px">
            <TitleText centered>Hello!</TitleText>
            <BodyText centered>My name is Michael Pingleton. I am a software developer who is well versed in web, desktop, and mobile development alike.</BodyText>
            <BodyText centered>I am familiar with several different programming languages, technologies, and platforms:</BodyText>
            {badgeContent}
            <BodyText centered>On this site, you will be able to see some of the projects that I am working on by clicking the 'Projects' tab.</BodyText>
        </VStack>
    )

    return (
        <AutomaticLayout navId="home" title="Home">
            <VStack>
                <Panel>
                    <XStack vertical={isMobile} horizontal={isBrowser}>
                        <ProfileImage isMobile={isMobile} />
                        {homepageContent}
                    </XStack>
                </Panel>
            </VStack>
        </AutomaticLayout>
    )
}
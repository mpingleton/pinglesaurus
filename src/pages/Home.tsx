import React, { useState, useEffect } from "react"
import { isBrowser, isMobile, BrowserView, MobileView } from "react-device-detect"

import AutomaticLayout from "../layouts/AutomaticLayout"

import Box from "../components/atomic/Box"
import VStack from "../components/atomic/VStack"
import HStack from "../components/atomic/HStack"
import HDivider from "../components/atomic/HDivider"
import Panel from "../components/atomic/Panel"
import Badge from "../components/atomic/Badge"
import TitleText from "../components/atomic/TitleText"
import BodyText from "../components/atomic/BodyText"
import Image from "../components/atomic/Image"

import XStack from "../components/molecular/XStack"
import ProfileImage from "../components/molecular/ProfileImage"
import SectionPanel from "../components/molecular/SectionPanel"
import FooterPanel from "../components/molecular/FooterPanel"
import SocialMediaPanelButton from "../components/molecular/SocialMediaPanelButton"

import DataContext from "../classes/DataContext"
import Language from "../classes/Language"
import Platform from "../classes/Platform"
import Framework from "../classes/Framework"

import initDataContext from "../data/initDataContext"
import getAllLanguages from "../data/getAllLanguages"
import getAllPlatforms from "../data/getAllPlatforms"
import getAllFrameworks from "../data/getAllFrameworks"

export default function Home() {

    const [ctx, setCtx] = useState<DataContext>(new DataContext())
    const [languages, setLanguages] = useState<Language[] | undefined>(undefined)
    const [platforms, setPlatforms] = useState<Platform[] | undefined>(undefined)
    const [frameworks, setFrameworks] = useState<Framework[] | undefined>(undefined)

    useEffect(() => {
        if (!ctx.isInitialized) {
            initDataContext()
                .then((d) => setCtx(d))
                .catch((err) => console.error(err))
        } else {
            getAllLanguages(ctx)
                .then((d) => setLanguages(d))
                .catch((err) => console.error(err))

            getAllPlatforms(ctx)
                .then((d) => setPlatforms(d))
                .catch((err) => console.error(err))

            getAllFrameworks(ctx)
                .then((d) => setFrameworks(d))
                .catch((err) => console.error(err))
        }
    }, [ctx])

    // TODO: Make this more appealing.
    if (!ctx.isInitialized || languages === undefined || platforms === undefined || frameworks === undefined) {
        return (
            <AutomaticLayout navId="home" title="Home">
                <TitleText centered>Loading...</TitleText>
            </AutomaticLayout>
        )
    }

    const favIcon = (<Image width="48px" height="48px" alt="icon" url="/images/question.png" bordered />)

    const hello = (<TitleText centered>Hello!</TitleText>)
    const selfIntro = (
        <BodyText centered>
            My name is Michael Pingleton.  I am a software developer who is well-versed in desktop, mobile, and web development alike.
        </BodyText>
    )

    const siteIntro = (
        <BodyText centered>
            I have created this website to showcase the projects that I have been working on.
            Here, you will see the various software projects and 3D prints that I am working on, as well as the general tinkering that I tend to do.
        </BodyText>
    )

    const helloPanel = (
        <Panel>
            <BrowserView>
                <HStack justifyItems="center" justifyContent="center">
                    <ProfileImage isMobile={false} />
                    <VStack width="100%" justifyItems="center" justifyContent="center" gapping="30px">
                        {hello}
                        {selfIntro}
                        {siteIntro}
                    </VStack>
                </HStack>
            </BrowserView>
            <MobileView>
                <VStack gapping="30px">
                    {hello}
                    <ProfileImage isMobile={true} />
                    {selfIntro}
                    {siteIntro}
                </VStack>
            </MobileView>
        </Panel>
    )

    const linkPanel = (
        <SectionPanel title="Links">
            <VStack padding="0px">
                <SocialMediaPanelButton
                    icon={favIcon}
                    platform="LinkedIn"
                    onClicc={() => {}}
                />
                <SocialMediaPanelButton
                    icon={favIcon}
                    platform="The Bit Whisperer - Substack"
                    username="@mnpingleton"
                    onClicc={() => {}}
                />
                <SocialMediaPanelButton
                    icon={favIcon}
                    platform="Bluesky"
                    username="@mnpingleton.bsky.social"
                    onClicc={() => {}}
                />
                <SocialMediaPanelButton
                    icon={favIcon}
                    platform="Instagram"
                    username="@pinglesaurus"
                    onClicc={() => {}}
                />
            </VStack>
        </SectionPanel>
    )

    const devPages = (
        <SectionPanel title="Developer Pages">
            <XStack horizontal={isBrowser} vertical={isMobile} padding="0px">
                <SocialMediaPanelButton
                    icon={favIcon}
                    platform="App Store"
                    username="Michael Pingleton"
                    onClicc={() => {}}
                />
                <SocialMediaPanelButton
                    icon={favIcon}
                    platform="Play Store"
                    username="Pinglesaurus"
                    onClicc={() => {}}
                />
                <SocialMediaPanelButton
                    icon={favIcon}
                    platform="Steam"
                    username="Nuclear Silicon"
                    onClicc={() => {}}
                />
            </XStack>
        </SectionPanel>
    )

    const stackPanel = (
        <SectionPanel title="Tech Stack">
            <VStack>
                <BodyText centered>Programming Languages</BodyText>
                <HStack wrap gapping="2px" padding="0px" justifyItems="center" justifyContent="center">
                    {languages!.map((l) => (<Badge badgeColor="black" textColor="lightgray" text={l.name} />))}
                </HStack>
                <HDivider />
                <BodyText centered>Platforms</BodyText>
                <HStack wrap gapping="2px" padding="0px" justifyItems="center" justifyContent="center">
                    {platforms!.map((l) => (<Badge badgeColor="black" textColor="lightgray" text={l.name} />))}
                </HStack>
                <HDivider />
                <BodyText centered>Frameworks & Libraries</BodyText>
                <HStack wrap gapping="2px" padding="0px" justifyItems="center" justifyContent="center">
                    {frameworks!.map((l) => (<Badge badgeColor="black" textColor="lightgray" text={l.name} />))}
                </HStack>
            </VStack>
        </SectionPanel>
    )

    const galleryPanel = (
        <SectionPanel title="Gallery">
            <BodyText centered>Under construction</BodyText>
        </SectionPanel>
    )

    const updatePanel = (
        <SectionPanel title="Latest Updates">
            <BodyText centered>Under construction</BodyText>
        </SectionPanel>
    )

    return (
        <AutomaticLayout navId="home" title="Home">
            <BrowserView>
                <VStack>
                    <HStack padding="0px">
                        <Box width="600px">{linkPanel}</Box>
                        <VStack width="80%" padding="0px">
                            {helloPanel}
                            {devPages}
                        </VStack>
                        <Box width="50%">{stackPanel}</Box>
                    </HStack>
                    <HStack padding="0px">
                        {updatePanel}
                        <Box width="50%">{galleryPanel}</Box>
                    </HStack>
                    <FooterPanel />
                </VStack>
            </BrowserView>
            <MobileView>
                <VStack>
                    {helloPanel}
                    {linkPanel}
                    {devPages}
                    {stackPanel}
                    {updatePanel}
                    {galleryPanel}
                    <FooterPanel />
                </VStack>
            </MobileView>
        </AutomaticLayout>
    )
}
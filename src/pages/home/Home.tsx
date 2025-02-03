import React, { useState, useEffect } from "react"
import { BrowserView, MobileView } from "react-device-detect"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import Box from "../../common/components/atomic/Box"
import VStack from "../../common/components/atomic/VStack"
import HStack from "../../common/components/atomic/HStack"
import Panel from "../../common/components/atomic/Panel"
import TitleText from "../../common/components/atomic/TitleText"
import BodyText from "../../common/components/atomic/BodyText"
import Image from "../../common/components/atomic/Image"

import ProfileImage from "../../common/components/molecular/ProfileImage"
import SectionPanel from "../../common/components/molecular/SectionPanel"
import SocialMediaPanelButton from "../../common/components/molecular/SocialMediaPanelButton"
import TechStackPanel from "../../common/components/molecular/TechStackPanel"

import DataContext from "../../classes/DataContext"
import Language from "../../classes/Language"
import Platform from "../../classes/Platform"
import Framework from "../../classes/Framework"

import initDataContext from "../../data/initDataContext"
import getAllLanguages from "../../data/getAllLanguages"
import getAllPlatforms from "../../data/getAllPlatforms"
import getAllFrameworks from "../../data/getAllFrameworks"

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

    if (!ctx.isInitialized || languages === undefined || platforms === undefined || frameworks === undefined) {
        return (<AutomaticLayout loading navId="home" title="Home" />)
    }

    const favIcon = (<Image width="48px" height="48px" alt="icon" url="/images/question.png" bordered />)
    const instagramIcon = (<Image width="48px" height="48px" alt="icon" url="/images/instagram.png" />)
    const linkedinIcon = (<Image height="48px" alt="icon" url="/images/linkedin.png" />)
    const substackIcon = (<Image width="48px" height="48px" alt="icon" url="/images/thebitwhisperer.png" bordered />)
    const githubIcon = (<Image width="48px" height="48px" alt="icon" url="/images/github.png" backing bordered />)

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
        <SectionPanel title="Social Media">
            <VStack padding="0px">
                <SocialMediaPanelButton
                    icon={linkedinIcon}
                    platform="LinkedIn"
                    onClicc={() => {}}
                />
                <SocialMediaPanelButton
                    icon={substackIcon}
                    platform="Substack"
                    username="The Bit Whisperer (@mnpingleton)"
                    onClicc={() => {}}
                />
                <SocialMediaPanelButton
                    icon={githubIcon}
                    platform="GitHub"
                    username="@mpingleton"
                    onClicc={() => {}}
                />
                <SocialMediaPanelButton
                    icon={favIcon}
                    platform="Bluesky"
                    username="@mnpingleton.bsky.social"
                    onClicc={() => {}}
                />
                <SocialMediaPanelButton
                    icon={instagramIcon}
                    platform="Instagram"
                    username="@pinglesaurus"
                    onClicc={() => {}}
                />
            </VStack>
        </SectionPanel>
    )

    /*
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
     */

    const stackPanel = (
        <TechStackPanel
            languages={languages}
            platforms={platforms}
            frameworks={frameworks}
        />
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

    const desktopLayout = (
        <VStack height="100%">
            <HStack padding="0px">
                <Box width="600px">{linkPanel}</Box>
                <VStack width="80%" padding="0px">
                    {helloPanel}
                </VStack>
                <Box width="50%">{stackPanel}</Box>
            </HStack>

        </VStack>
    )

    /*
    <HStack padding="0px">
        {updatePanel}
        <Box width="50%">{galleryPanel}</Box>
    </HStack>
    */

    const mobileLayout = (
        <VStack>
            {helloPanel}
            {linkPanel}
            {stackPanel}
        </VStack>
    )

    /*
    {updatePanel}
    {galleryPanel}
    */

    return (
        <AutomaticLayout
            navId="home"
            title="Home"
            desktopLayout={desktopLayout}
            mobileLayout={mobileLayout}
        />
    )
}
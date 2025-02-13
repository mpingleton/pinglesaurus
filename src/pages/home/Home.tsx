import React, { useState, useEffect } from "react"
import { isMobile, BrowserView, MobileView } from "react-device-detect"

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
import RedirectModal from "../../common/components/molecular/RedirectModal"

import DataContext from "../../classes/DataContext"
import Language from "../../classes/Language"
import Platform from "../../classes/Platform"
import Framework from "../../classes/Framework"

import getAllLanguages from "../../data/getAllLanguages"
import getAllPlatforms from "../../data/getAllPlatforms"
import getAllFrameworks from "../../data/getAllFrameworks"

export default function Home(props: {
    ctx: DataContext,
    navFunc: (toUrl: string) => void
}) {
    const [isRedirectModalOpen, setRedirectModalOpen] = useState<boolean>(false)
    const [infoRedirectModalName, setRedirectModalName] = useState<string | undefined>(undefined)
    const [infoRedirectModalIcon, setRedirectModalIcon] = useState<React.ReactNode | undefined>(undefined)
    const [infoRedirectModalUrl, setRedirectModalUrl] = useState<string | undefined>(undefined)

    const [languages, setLanguages] = useState<Language[] | undefined>(undefined)
    const [platforms, setPlatforms] = useState<Platform[] | undefined>(undefined)
    const [frameworks, setFrameworks] = useState<Framework[] | undefined>(undefined)

    function setRedirectModal(name: string, icon: React.ReactNode, url: string) {
        setRedirectModalName(name)
        setRedirectModalIcon(icon)
        setRedirectModalUrl(url)
        setRedirectModalOpen(true)
    }

    function executeRedirect() {
        props.navFunc(infoRedirectModalUrl!)
    }

    useEffect(() => {
        if (props.ctx.isInitialized) {
            getAllLanguages(props.ctx)
                .then((d) => setLanguages(d))
                .catch((err) => console.error(err))

            getAllPlatforms(props.ctx)
                .then((d) => setPlatforms(d))
                .catch((err) => console.error(err))

            getAllFrameworks(props.ctx)
                .then((d) => setFrameworks(d))
                .catch((err) => console.error(err))
        }
    }, [props.ctx])

    if (!props.ctx.isInitialized || languages === undefined || platforms === undefined || frameworks === undefined) {
        return (<AutomaticLayout loading navId="home" title="Home" navFunc={props.navFunc} />)
    }

    const favIcon = (<Image width="48px" height="48px" alt="icon" url="/images/question.png" bordered centered />)
    const instagramIcon = (<Image width="48px" height="48px" alt="icon" url="/images/instagram.png" centered />)
    const linkedinIcon = (<Image height="48px" alt="icon" url="/images/linkedin.png" centered />)
    const substackIcon = (<Image width="48px" height="48px" alt="icon" url="/images/thebitwhisperer.png" bordered centered />)
    const githubIcon = (<Image width="48px" height="48px" alt="icon" url="/images/github.png" backing bordered centered />)

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
                    onClicc={() => setRedirectModal("Linkedin", linkedinIcon, "//www.linkedin.com/in/michael-pingleton-8833a0318")}
                />
                <SocialMediaPanelButton
                    icon={substackIcon}
                    platform="Substack"
                    username="The Bit Whisperer (@mnpingleton)"
                    onClicc={() => setRedirectModal("Substack", substackIcon, "//mnpingleton.substack.com/")}
                />
                <SocialMediaPanelButton
                    icon={githubIcon}
                    platform="GitHub"
                    username="@mpingleton"
                    onClicc={() => setRedirectModal("Github", githubIcon, "//github.com/mpingleton")}
                />
                <SocialMediaPanelButton
                    icon={favIcon}
                    platform="Bluesky"
                    username="@mnpingleton.bsky.social"
                    onClicc={() => setRedirectModal("Bluesky", favIcon, "//bsky.app/profile/mnpingleton.bsky.social")}
                />
                <SocialMediaPanelButton
                    icon={instagramIcon}
                    platform="Instagram"
                    username="@pinglesaurus"
                    onClicc={() => setRedirectModal("Instagram", instagramIcon, "//www.instagram.com/pinglesaurus")}
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

    const modals = [
        (
            <RedirectModal
                isOpen={isRedirectModalOpen}
                onClose={() => setRedirectModalOpen(false)}
                onProceed={() => executeRedirect()}
                isMobile={isMobile}
                siteName={infoRedirectModalName}
                siteIcon={infoRedirectModalIcon}
                siteUrl={infoRedirectModalUrl}
            />
        )
    ]

    return (
        <AutomaticLayout
            navId="home"
            title="Home"
            desktopLayout={desktopLayout}
            mobileLayout={mobileLayout}
            modals={modals}
            navFunc={props.navFunc}
        />
    )
}
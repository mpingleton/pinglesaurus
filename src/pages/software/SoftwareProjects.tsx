import React, { useState, useEffect } from "react"
import { isMobile } from "react-device-detect"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import BodyText from "../../common/components/atomic/BodyText"
import Panel from "../../common/components/atomic/Panel"
import VStack from "../../common/components/atomic/VStack"
import HStack from "../../common/components/atomic/HStack"
import VDivider from "../../common/components/atomic/VDivider"
import Image from "../../common/components/atomic/Image"

import RedirectModal from "../../common/components/molecular/RedirectModal"

import SoftwareProjectPanelButton from "./components/SoftwareProjectPanelButton"
import SoftwareProjectProfile from "./layouts/SoftwareProjectProfile"

import DataContext from "../../classes/DataContext"
import SoftwareProject from "../../classes/SoftwareProject"

import getSoftwareProjectById from "../../data/getSoftwareProjectById"
import getAllSoftwareProjects from "../../data/getAllSoftwareProjects"

export default function SoftwareProjects(props: {
    ctx: DataContext,
    navFunc: (toUrl: string) => void
}) {
    const [isRedirectModalOpen, setRedirectModalOpen] = useState<boolean>(false)
    const [infoRedirectModalName, setRedirectModalName] = useState<string | undefined>(undefined)
    const [infoRedirectModalUrl, setRedirectModalUrl] = useState<string | undefined>(undefined)

    const [software, setSoftware] = useState<SoftwareProject[] | undefined>(undefined)
    const [indexSelected, setIndexSelected] = useState<number | undefined>(undefined)
    const [objectSelected, setObjectSelected] = useState<SoftwareProject | undefined>(undefined)

    function setRedirectModal(name: string, url: string) {
        setRedirectModalName(name)
        setRedirectModalUrl(url)
        setRedirectModalOpen(true)
    }

    function executeRedirect() {
        props.navFunc(infoRedirectModalUrl!)
    }

    useEffect(() => {
        if (props.ctx.isInitialized) {
            getAllSoftwareProjects(props.ctx)
                .then((d) => setSoftware(d))
                .catch((err) => console.error(err))
        }
    }, [props.ctx])

    useEffect(() => {
        if (indexSelected === undefined) {
            setObjectSelected(undefined)
        } else {
            getSoftwareProjectById(props.ctx, software[indexSelected].id)
                .then((d) => setObjectSelected(d))
                .catch((err) => console.log(err))
        }
    }, [indexSelected])

    if (!props.ctx.isInitialized || software === undefined) {
        return (<AutomaticLayout loading navId="software" title="Software Projects" navFunc={props.navFunc} />)
    }

    const softwareList = software.map((d, i) => (
        <SoftwareProjectPanelButton
            data={d}
            onClicc={() => setIndexSelected(i)}
        />
    ))

    const desktopLayout = (
        <HStack>
            <VStack padding="0px" width="400px">{softwareList}</VStack>
            <VDivider />
            {objectSelected === undefined ?
                (<HStack padding="0px" width="100%"><Panel>
                    <BodyText centered>Select a project on the left</BodyText>
                </Panel></HStack>) :
                (<SoftwareProjectProfile
                    data={objectSelected!}
                    isMobile={false}
                    onBackClicc={() => setIndexSelected(undefined)}
                    onDownloadClicc={setRedirectModal}
                />)}
        </HStack>
    )

    const mobileLayout = (
        <HStack>
            {objectSelected === undefined ?
                (<VStack padding="0px" width="100%">{softwareList}</VStack>) :
                (<SoftwareProjectProfile
                    data={objectSelected!}
                    isMobile={true}
                    onBackClicc={() => setIndexSelected(undefined)}
                    onDownloadClicc={setRedirectModal}
                />)}
        </HStack>
    )

    const modals = [
        (
            <RedirectModal
                isOpen={isRedirectModalOpen}
                onClose={() => setRedirectModalOpen(false)}
                onProceed={() => executeRedirect()}
                isMobile={isMobile}
                siteName={infoRedirectModalName}
                siteIcon={
                    <Image
                        width="48px"
                        height="48px"
                        alt="icon"
                        url="/images/question.png"
                        bordered
                        centered
                    />
                }
                siteUrl={infoRedirectModalUrl}
            />
        )
    ]

    return (
        <AutomaticLayout
            navId="software"
            title="Software Projects"
            desktopLayout={desktopLayout}
            mobileLayout={mobileLayout}
            modals={modals}
            navFunc={props.navFunc}
        />
    )
}
import React, { useState, useEffect } from "react"
import { BrowserView, MobileView } from "react-device-detect"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import BodyText from "../../common/components/atomic/BodyText"
import Panel from "../../common/components/atomic/Panel"
import VStack from "../../common/components/atomic/VStack"
import HStack from "../../common/components/atomic/HStack"
import VDivider from "../../common/components/atomic/VDivider"

import SoftwareProjectPanelButton from "./components/SoftwareProjectPanelButton"
import SoftwareProjectProfile from "./layouts/SoftwareProjectProfile"

import DataContext from "../../classes/DataContext"
import SoftwareProject from "../../classes/SoftwareProject"

import initDataContext from "../../data/initDataContext"
import getAllSoftwareProjects from "../../data/getAllSoftwareProjects"

export default function SoftwareProjects() {

    const [ctx, setCtx] = useState<DataContext>(new DataContext())
    const [software, setSoftware] = useState<SoftwareProject[] | undefined>(undefined)
    const [indexSelected, setIndexSelected] = useState<number | undefined>(undefined)

    useEffect(() => {
        if (!ctx.isInitialized) {
            initDataContext()
                .then((d) => setCtx(d))
                .catch((err) => console.error(err))
        } else {
            getAllSoftwareProjects(ctx)
                .then((d) => setSoftware(d))
                .catch((err) => console.error(err))
        }
    }, [ctx])

    if (!ctx.isInitialized || software === undefined) {
        return (<AutomaticLayout loading navId="software" title="Software Projects" />)
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
            {indexSelected === undefined ?
                (<HStack padding="0px" width="100%"><Panel>
                    <BodyText centered>Select a project on the left</BodyText>
                </Panel></HStack>) :
                (<SoftwareProjectProfile
                    data={software[indexSelected!]}
                    isMobile={false}
                    onBackClicc={() => setIndexSelected(undefined)}
                />)}
        </HStack>
    )

    const mobileLayout = (
        <HStack>
            {indexSelected === undefined ?
                (<VStack padding="0px" width="100%">{softwareList}</VStack>) :
                (<SoftwareProjectProfile
                    data={software[indexSelected!]}
                    isMobile={true}
                    onBackClicc={() => setIndexSelected(undefined)}
                />)}
        </HStack>
    )

    return (
        <AutomaticLayout
            navId="software"
            title="Software Projects"
            desktopLayout={desktopLayout}
            mobileLayout={mobileLayout}
        />
    )
}
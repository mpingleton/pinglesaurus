import React from "react"

import VStack from "../atomic/VStack"
import BodyText from "../atomic/BodyText"
import HStack from "../atomic/HStack"
import Badge from "../atomic/Badge"
import HDivider from "../atomic/HDivider"

import SectionPanel from "./SectionPanel"

import Language from "../../../classes/Language"
import Platform from "../../../classes/Platform"
import Framework from "../../../classes/Framework"

export default function TechStackPanel(props: {
    languages?: Language[],
    platforms?: Platform[],
    frameworks?: Framework[]
}) {

    const languages = [
        (<BodyText centered>Programming Languages</BodyText>),
        (
            <HStack wrap gapping="2px" padding="0px" justifyItems="center" justifyContent="center">
                {props.languages?.map((l) => (<Badge badgeColor="black" textColor="lightgray" text={l.name} />))}
            </HStack>
        )
    ]

    const platforms = [
        (<BodyText centered>Platforms</BodyText>),
        (
            <HStack wrap gapping="2px" padding="0px" justifyItems="center" justifyContent="center">
                {props.platforms?.map((l) => (<Badge badgeColor="black" textColor="lightgray" text={l.name} />))}
            </HStack>
        )
    ]

    const frameworks = [
        (<BodyText centered>Frameworks & Libraries</BodyText>),
        (
            <HStack wrap gapping="2px" padding="0px" justifyItems="center" justifyContent="center">
                {props.frameworks?.map((l) => (<Badge badgeColor="black" textColor="lightgray" text={l.name} />))}
            </HStack>
        )
    ]

    return (
        <SectionPanel title="Tech Stack">
            <VStack padding="0px">
                {props.languages?.length > 0 ? languages : null}
                <HDivider />
                {props.platforms?.length > 0 ? platforms : null}
                <HDivider />
                {props.frameworks?.length > 0 ? frameworks : null}
            </VStack>
        </SectionPanel>
    )
}
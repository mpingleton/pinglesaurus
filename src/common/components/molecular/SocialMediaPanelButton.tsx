import React from "react"

import BodyText from "../atomic/BodyText"
import SubtitleText from "../atomic/SubtitleText"
import HStack from "../atomic/HStack"
import VStack from "../atomic/VStack"

import PanelButton from "../atomic/PanelButton"

export default function SocialMediaPanelButton(props: {
    icon: React.ReactNode,
    platform: string,
    username?: string,
    onClicc?: () => void
}) {

    const optionalUsername = props.username === undefined ? null : (<SubtitleText>{props.username}</SubtitleText>)

    return (
        <PanelButton onClicc={props.onClicc}>
            <HStack>
                {props.icon}
                <VStack padding="0px">
                    <BodyText>{props.platform}</BodyText>
                    {optionalUsername}
                </VStack>
            </HStack>
        </PanelButton>
    )
}
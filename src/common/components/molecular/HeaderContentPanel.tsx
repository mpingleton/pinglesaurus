import React from "react"

import Panel from "../atomic/Panel"
import VStack from "../atomic/VStack"
import HeaderText from "../atomic/HeaderText"
import BodyText from "../atomic/BodyText"

export default function HeaderContentPanel(props: { header: string, content: string }) {

    return (
        <Panel>
            <VStack padding="0px" gapping="24px">
                <HeaderText centered>{props.header}</HeaderText>
                <BodyText centered>{props.content}</BodyText>
            </VStack>
        </Panel>
    )
}
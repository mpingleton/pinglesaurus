import React from "react"

import Panel from "../atomic/Panel"
import HeaderText from "../atomic/HeaderText"
import VStack from "../atomic/VStack"
import HDivider from "../atomic/HDivider"

export default function SectionPanel(props: {
    title: string,
    width?: string,
    height?: string,
    children: React.ReactNode
}) {

    return (
        <Panel width={props.width} height={props.height}>
            <VStack gapping="4px" padding="0px" height="100%">
                <HeaderText>{props.title}</HeaderText>
                <HDivider />
                {props.children}
            </VStack>
        </Panel>
    )
}
import React from "react"

import Panel from "../atomic/Panel"
import TitleText from "../atomic/TitleText"

export default function TitlePanel(props: { title: string }) {

    return (
        <Panel>
            <TitleText centered>{props.title}</TitleText>
        </Panel>
    )
}
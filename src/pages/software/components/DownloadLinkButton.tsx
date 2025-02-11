import React from "react"

import Panel from "../../../common/components/atomic/Panel"
import BodyText from "../../../common/components/atomic/BodyText"
import Image from "../../../common/components/atomic/Image"

import DownloadLink from "../../../classes/DownloadLink"

export default function DownloadLinkButton(props: {
    data: DownloadLink,
    onClicc: (name: string, url: string) => void
}) {

    function handleClicc() {
        props.onClicc(props.data.type, props.data.url)
    }

    return (
        <Panel cliccable onClicc={handleClicc}>
            <BodyText centered>{props.data.description}</BodyText>
        </Panel>
    )
}
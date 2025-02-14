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
        if (props.data.type === "GOOGLEPLAY") {
            props.onClicc("the Play Store", props.data.url)
        } else if (props.data.type === "APPSTORE") {
            props.onClicc("the App Store", props.data.url)
        } else {
            props.onClicc(props.data.type, props.data.url)
        }
    }

    return (
        <Panel cliccable onClicc={handleClicc}>
            <BodyText centered>{props.data.description}</BodyText>
        </Panel>
    )
}
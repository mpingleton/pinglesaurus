import React from "react"

import Link from "../atomic/Link"
import Panel from "../atomic/Panel"

export default function LinkPanel(props: {
    href: string,
    onClicc?: () => void,
    children: React.ReactNode
}) {

    return (
        <Link href={props.href}>
            <Panel cliccable onClicc={props.onClicc}>{props.children}</Panel>
        </Link>
    )
}
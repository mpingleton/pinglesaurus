import React from "react"

import Link from "../atomic/Link"
import Panel from "../atomic/Panel"

export default function LinkPanel(props: { href: string, children: React.ReactNode }) {

    return (
        <Link href={props.href}>
            <Panel>{props.children}</Panel>
        </Link>
    )
}
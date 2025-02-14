import React, { useState, useEffect } from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import VStack from "../../common/components/atomic/VStack"

import UpdatePanel from "./components/UpdatePanel"

import DataContext from "../../classes/DataContext"
import Update from "../../classes/Update"

import getAllUpdates from "../../data/getAllUpdates"

export default function Updates(props: {
    ctx: DataContext,
    navFunc: (toUrl: string) => void
}) {
    const [updates, setUpdates] = useState<Update[] | undefined>([])

    useEffect(() => {
        if (props.ctx.isInitialized) {
            getAllUpdates(props.ctx)
                .then((d) => setUpdates(d))
                .catch((err) => console.error(err))
        }
    }, [props.ctx])

    if (!props.ctx.isInitialized || updates === undefined) {
        return (<AutomaticLayout loading navId="updates" title="Updates" navFunc={props.navFunc} />)
    }

    const updatePanels = updates!.map((u) => (<UpdatePanel data={u} />))

    return (
        <AutomaticLayout
            navId="updates"
            title="Updates"
            desktopLayout={<VStack>{updatePanels}</VStack>}
            navFunc={props.navFunc}
        />
    )
}
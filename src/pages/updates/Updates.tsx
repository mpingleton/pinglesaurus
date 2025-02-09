import React, { useState, useEffect } from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import VStack from "../../common/components/atomic/VStack"

import UpdatePanel from "./components/UpdatePanel"

import DataContext from "../../classes/DataContext"
import Update from "../../classes/Update"

import initDataContext from "../../data/initDataContext"
import getAllUpdates from "../../data/getAllUpdates"

export default function Updates() {

    const [ctx, setCtx] = useState<DataContext>(new DataContext())
    const [updates, setUpdates] = useState<Update[] | undefined>([])

    useEffect(() => {
        if (!ctx.isInitialized) {
            initDataContext()
                .then((d) => setCtx(d))
                .catch((err) => console.error(err))
        } else {
            getAllUpdates(ctx)
                .then((d) => setUpdates(d))
                .catch((err) => console.error(err))
        }
    }, [ctx])

    if (!ctx.isInitialized || updates === undefined) {
        return (<AutomaticLayout loading navId="updates" title="Updates" />)
    }

    const updatePanels = updates!.map((u) => (<UpdatePanel data={u} />))

    return (
        <AutomaticLayout
            navId="updates"
            title="Updates"
            desktopLayout={<VStack>{updatePanels}</VStack>}
        />
    )
}
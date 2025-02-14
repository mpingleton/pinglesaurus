import React from "react"

import VStack from "../atomic/VStack"
import HeaderContentPanel from "./HeaderContentPanel"

export default function UnderConstructionPanel() {

    const subtitle = "This feature is currently under construction.  Please check back soon."

    return (<VStack><HeaderContentPanel header="Under Construction" content={subtitle} /></VStack>)
}
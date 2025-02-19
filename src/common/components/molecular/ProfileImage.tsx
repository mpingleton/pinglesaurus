import React from "react"

import Image from "../atomic/Image"
import HStack from "../atomic/HStack"

export default function ProfileImage(props: { isMobile: boolean }) {

    const url = "/images/profile.png"
    const alt = "Pinglesaurus"

    if (props.isMobile) {
        return (
            <HStack justifyContent="center" justifyItems="center">
                <Image url={url} alt={alt} width="100%" />
            </HStack>
        )
    } else {
        return (
            <HStack justifyContent="center" justifyItems="center">
                <Image url={url} alt={alt} width="250px" height="250px" />
            </HStack>
        )
    }
}
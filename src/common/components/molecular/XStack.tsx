import React from "react"
import HStack from "../atomic/HStack"
import VStack from "../atomic/VStack"

export default function XStack(props: {
    width?: string,
    height?: string,
    justifyContent?: string,
    justifyItems?: string,
    padding?: string,
    gapping?: string,
    vertical: boolean,
    horizontal: boolean,
    children: React.ReactNode
}) {

    if (props.vertical && !props.horizontal) {
        return (
            <VStack
                width={props.width}
                height={props.height}
                justifyContent={props.justifyContent}
                justifyItems={props.justifyItems}
                padding={props.padding}
                gapping={props.gapping}
            >
                {props.children}
            </VStack>
        )
    } else if (props.horizontal && !props.vertical) {
        return (
            <HStack
                width={props.width}
                height={props.height}
                justifyContent={props.justifyContent}
                justifyItems={props.justifyItems}
                padding={props.padding}
                gapping={props.gapping}
            >
                {props.children}
            </HStack>
        )
    }

    return null
}
import React from "react"

export default function Link(props: { href: string, children: React.ReactNode }) {

    const st = {
        textDecoration: "none",
        color: "lightgray"
    }

    return (<a style={st} href={props.href}>{props.children}</a>)
}
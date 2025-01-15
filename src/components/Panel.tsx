import React from "react"

export default function Panel(props: { isMobile: boolean, children: React.ReactNode }) {

    return (
        <div className={props.isMobile ? "mobile_panel" : "panel"}>
            {props.children}
        </div>
    )
}
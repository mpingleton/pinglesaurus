import React from "react"

function Panel(props: { isMobile: boolean, children: React.ReactElement | React.ReactElement[] }) {
    return (
        <div className={props.isMobile === true ? "mobile_panel" : "panel"}>
            {props.children}
        </div>
    )
}

export default Panel
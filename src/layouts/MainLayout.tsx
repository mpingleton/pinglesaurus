import React from "react"

export default function MainLayout(props: { title: string, children?: React.ReactNode }) {

    document.title = `${props.title} - Pinglesaur.us`

    const header = (
        <div className="mainlayout_header">
        </div>
    )

    const linkbarLeft = (
        <div className="mainlayout_linkbar_left">
            <ul className="mainlayout_linkbar">
                <li className="mainlayout_linkbar_item"><a className="mainlayout_linkbar_item" href="/projects">Projects</a></li>
                <li className="mainlayout_linkbar_item"><a className="mainlayout_linkbar_item" href="//github.com/mpingleton">GitHub</a></li>
            </ul>
        </div>
    )

    const linkbarRight = (
        <div className="mainlayout_linkbar_right">
            <ul className="mainlayout_linkbar">
                <li className="mainlayout_linkbar_item"><a className="mainlayout_linkbar_item" href="/mobile">Mobile</a></li>
                <li className="mainlayout_linkbar_item"><a className="mainlayout_linkbar_item" href="/privacy">Privacy Policy</a></li>
            </ul>
        </div>
    )

    const homeButton = (
        <div className="mainlayout_homebutton">
            <a className="mainlayout_homebutton" href="/">&nbsp;</a>
        </div>
    )

    return (
        <div className="mainlayout">
            {header}
            {linkbarLeft}
            {linkbarRight}
            {homeButton}
            <div className="mainlayout_body">
                {props.children}
            </div>
        </div>
    )
}
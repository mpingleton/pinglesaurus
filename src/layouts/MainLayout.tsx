import React from "react"

function MainLayout(props: { title: string, children: React.ReactElement | React.ReactElement[] }) {
    document.title=`${props.title} - Pinglesaur.us`

    return (
        <div className="mainlayout">
            <div className="mainlayout_header">

            </div>
            <div className="mainlayout_linkbar_left">
                <ul className="mainlayout_linkbar">
                    <li className="mainlayout_linkbar_item"><a className="mainlayout_linkbar_item" href="/projects">Projects</a></li>
                    <li className="mainlayout_linkbar_item"><a className="mainlayout_linkbar_item" href="//github.com/mpingleton">GitHub</a></li>
                </ul>
            </div>
            <div className="mainlayout_linkbar_right">
                <ul className="mainlayout_linkbar">
                    <li className="mainlayout_linkbar_item"><a className="mainlayout_linkbar_item" href="/mobile">Mobile</a></li>
                    <li className="mainlayout_linkbar_item"><a className="mainlayout_linkbar_item" href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="mainlayout_homebutton">
                <a className="mainlayout_homebutton" href="/">&nbsp;</a>
            </div>
            <div className="mainlayout_body">
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout
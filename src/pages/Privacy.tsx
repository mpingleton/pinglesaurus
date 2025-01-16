import React from "react"
import Panel from "../components/Panel"

export default function Privacy(props: { isMobile: boolean }) {

    const titlePanel = (
        <Panel isMobile={props.isMobile}>
            <center><h1>Privacy Policy</h1></center>
        </Panel>
    )

    const introductionPanel = (
        <Panel isMobile={props.isMobile}>
            <center><h2>Introduction</h2></center>
            <p>
                The purpose of this privacy policy is to inform you of the way your data is collected, processed, and stored while using the pinglesaur.us website.
                It is important to employ responsible and ethical practices when handling user data.
            </p>
        </Panel>
    )

    const p1Panel = (
        <Panel isMobile={props.isMobile}>
            <center><h2>Information You Give</h2></center>
            <p>
                The information you may give includes the email address that you may optionally provide when using the contact form.
            </p>
        </Panel>
    )

    const p2Panel = (
        <Panel isMobile={props.isMobile}>
            <center><h2>Logging</h2></center>
            <p>
                Device data, such as IP addresses, may be logged upon accessing pinglesaur.us servers.
            </p>
        </Panel>
    )

    const p3Panel = (
        <Panel isMobile={props.isMobile}>
            <center><h2>Third Parties</h2></center>
            <p>
                Third-party servers are used to serve web content, as well as collect, process, and store data.
            </p>
        </Panel>
    )

    const p4Panel = (
        <Panel isMobile={props.isMobile}>
            <center><h2>Cookies</h2></center>
            <p>
                The pinglesaur.us website does not make use of cookies.
            </p>
        </Panel>
    )

    return (
        <div className="privacypage">
            {titlePanel}
            {introductionPanel}
            {p1Panel}
            {p2Panel}
            {p3Panel}
            {p4Panel}
        </div>
    );
}
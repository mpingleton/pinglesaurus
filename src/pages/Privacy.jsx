import React from 'react';
import Panel from '../components/Panel';

function Privacy() {
    return (
        <div className="privacypage">
            <Panel>
                <center><h1>Privacy Policy</h1></center>
                <h2>Introduction</h2>
                <p>
                    The purpose of this privacy policy is to inform you of the way your data is collected, processed, and stored while using the pinglesaur.us website.
                    It is important to employ responsible and ethical practices when handling user data.
                </p>
                <h2>Information You Give</h2>
                <p>
                    The information you may give includes the email address that you may optionally provide when using the contact form.
                </p>
                <h2>Logging</h2>
                <p>
                    Device data, such as IP addresses, may be logged upon accessing pinglesaur.us servers.
                </p>
                <h2>Third Parties</h2>
                <p>
                    Third-party servers are used to serve web content, as well as collect, process, and store data.
                </p>
                <h2>Cookies</h2>
                <p>
                    The pinglesaur.us website does not make use of cookies.
                </p>
                <h2>Children</h2>
                <p>
                    The pinglesaur.us website is not intended for use by children under the age of 18.
                    If you are a parent or legal guardian of a child, whom you suspect may have provided personal information, please utilize the contact form to report the situation so the information can be erased.
                </p>
            </Panel>
        </div>
    );
}

export default Privacy;
import React from 'react';
import Panel from '../components/Panel';

function Home() {
    return (
        <div className="homepage">
            <Panel>
                <div id="homepage_wrapper">
                    <div id="homepage_picture">
                        <img id="homepage_pinglesaurus" src="/images/pinglesaurus.png" />
                    </div>
                    <div id="homepage_content">
                        <h1>Hello!</h1>
                        <p>
                                My name is Michael Pingleton.  I am a software developer who is well versed in web, desktop, and mobile development alike.
                                I am familiar with several different programming languages, technologies, and platforms:
                        </p>
                        <p>
                            On this site, you will be able to see some of the projects that I am working on by clicking the 'Projects' tab.
                            Although I am not looking for employment or collaboration opportunities at the moment, you can send me a message by clicking the 'Contact' tab.
                        </p>
                    </div>
                </div>
            </Panel>
        </div>
    );
}

export default Home;
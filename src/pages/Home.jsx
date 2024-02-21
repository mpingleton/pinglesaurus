import React from 'react';
import Panel from '../components/Panel';
import Badge from '../components/Badge';

function Home(props) {
    return (
        <div className="homepage">
            <Panel isMobile={props.isMobile}>
                <div id={props.isMobile === true ? "homepage_mobile_wrapper" : "homepage_wrapper"}>
                    <div id="homepage_picture">
                        <img id={props.isMobile === true ? "homepage_mobile_pinglesaurus" : "homepage_pinglesaurus"} src="/images/pinglesaurus.png" />
                    </div>
                    <div id="homepage_content">
                        <center>
                            <h1>Hello!</h1>
                            <p>
                                My name is Michael Pingleton.  I am a software developer who is well versed in web, desktop, and mobile development alike.
                                I am familiar with several different programming languages, technologies, and platforms:
                            </p>
                            <div className={props.isMobile === true ? "homepage_mobile_badges_wrapper" : "homepage_badges_wrapper"}>
                                <div className={props.isMobile === true ? "homepage_mobile_badges" : "homepage_badges"}>
                                    <Badge badgeColor="black" textColor="lightgray" text="C" />
                                    <Badge badgeColor="black" textColor="lightgray" text="C++" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Java" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Kotlin" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Swift" />
                                    <Badge badgeColor="black" textColor="lightgray" text="JavaScript" />
                                    <Badge badgeColor="black" textColor="lightgray" text="TypeScript" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Python" />
                                    <Badge badgeColor="black" textColor="lightgray" text="HTML" />
                                    <Badge badgeColor="black" textColor="lightgray" text="CSS" />
                                </div>
                                <div className={props.isMobile === true ? "homepage_mobile_badges" : "homepage_badges"}>
                                    <Badge badgeColor="black" textColor="lightgray" text="React" />
                                    <Badge badgeColor="black" textColor="lightgray" text="NodeJS" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Vulkan" />
                                    <Badge badgeColor="black" textColor="lightgray" text="OpenGL" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Sequelize" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Prisma ORM" />
                                    <Badge badgeColor="black" textColor="lightgray" text="ExpressJS" />
                                    <Badge badgeColor="black" textColor="lightgray" text="CUDA" />
                                </div>
                                <div className={props.isMobile === true ? "homepage_mobile_badges" : "homepage_badges"}>
                                    <Badge badgeColor="black" textColor="lightgray" text="iOS" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Android" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Windows" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Mac" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Linux" />
                                    <Badge badgeColor="black" textColor="lightgray" text="Web" />
                                </div>
                            </div>
                            <p>
                                On this site, you will be able to see some of the projects that I am working on by clicking the 'Projects' tab.
                            </p>
                        </center>
                    </div>
                </div>
            </Panel>
        </div>
    );
}

export default Home;
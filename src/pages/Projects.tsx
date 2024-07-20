import React from "react"
import Panel from "../components/Panel"
import Badge from "../components/Badge"

import projects from "../projects.json"

function Projects(props: { isMobile: boolean }) {

    const projectLinks = projects.map((project) => {
        const platformBadges = project.platforms.map((platform) => (
            <Badge badgeColor="black" textColor="lightgray" text={platform} />
        ))

        return (
            <a className="project_link" href={props.isMobile ? `/mobile/projects/id/${project.id}` : `/projects/id/${project.id}`}>
                <Panel isMobile={props.isMobile}>
                    <div className={props.isMobile ? "project_mobile_wrapper" : "project_wrapper"}>
                        <div className="project_icon">
                            <img className="project_icon" src={project.iconUrl} />
                        </div>
                        <div className={props.isMobile ? "project_mobile_content" : "project_content"}>
                            <div className={props.isMobile ? "project_mobile_title" : "project_title"}>
                                <h1>{project.name}</h1>
                                <Badge badgeColor="#555555" textColor="#EEEEEE" text={project.versionLabel} />
                            </div>
                            <div className={props.isMobile ? "project_mobile_description" : "project_description"}>
                                <p>{project.shortDescription}</p>
                                <div className={props.isMobile ? "project_mobile_platform_badges" : "project_platform_badges"}>
                                    {platformBadges}
                                </div>
                            </div>
                        </div>
                    </div>
                </Panel>
            </a>
        )
    })

    return (
        <div className="projectspage">
            <Panel isMobile={props.isMobile}>
                <center><h1>Projects</h1></center>
            </Panel>
            {projectLinks}
        </div>
    )
}

export default Projects
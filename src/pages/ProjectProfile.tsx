import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Panel from "../components/Panel"
import Badge from "../components/Badge"

import projects from "../projects.json"

function ProjectProfile(props: { isMobile: boolean }) {
    const { projectId } = useParams()
    const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0)

    const projectArray: any = projects.filter((project) => project.id === projectId);
    if (projectArray.length === 0) {
        return (
            <div className="projectprofilepage">
                <Panel isMobile={props.isMobile}><center><h1>Project not found.</h1></center></Panel>
            </div>
        )
    }
    else if (projectArray.length > 1) {
        return (
            <div className="projectprofilepage">
                <Panel isMobile={props.isMobile}><center><h1>Internal error.</h1></center></Panel>
            </div>
        )
    }
    const project = projectArray[0]

    const platformBadges = project.platforms.map((p: any) => (
        <Badge badgeColor="#333333" textColor="#EEEEEE" text={p} />
    ))

    const technologyBadges = project.technologies.map((t: any) => (
        <Badge badgeColor="#333333" textColor="#EEEEEE" text={t} />
    ))

    const programmingLanguageBadges = project.programmingLanguages.map((l: any) => (
        <Badge badgeColor="#333333" textColor="#EEEEEE" text={l} />
    ))

    const repositoryLinks = project.repositoryLinks.map((repositoryLink: any) => (
        <a className="badge" href={repositoryLink.url}><Badge badgeColor="#222222" textColor="#FFFFFF" text={repositoryLink.description} /></a>
    ))

    const downloadLinks = project.downloadLinks.map((downloadLink: any) => (
        <a className="badge" href={downloadLink.url}><Badge badgeColor="#222222" textColor="#FFFFFF" text={downloadLink.description} /></a>
    ))

    const panelProjectWrapper = (
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
                    <p>{project.shortDescription}</p>
                    <p>{project.longDescription}</p>
                </div>
            </div>
        </Panel>
    )

    const panelProjectBadgesWrapper = (
        <Panel isMobile={props.isMobile}>
            <div className="project_badges_wrapper">
                <div className="project_badges">
                    {platformBadges}
                </div>
                <div className="project_badges">
                    {technologyBadges}
                </div>
                <div className="project_badges">
                    {programmingLanguageBadges}
                </div>
            </div>
        </Panel>
    )

    const panelProjectScreenshotWrapper = project.screenshots.length > 0 ? (
        <Panel isMobile={props.isMobile}>
            <div className={props.isMobile ? "project_mobile_screenshot_wrapper" : "project_screenshot_wrapper"}>
                <div className="project_screenshot_image">
                    <img className={props.isMobile ? "project_mobile_screenshot_image" : "project_screenshot_image"} src={project.screenshots[selectedScreenshotIndex].imageUrl} />
                </div>
                <div className="project_screenshot_description_wrapper">
                    <p>{project.screenshots[selectedScreenshotIndex].description}</p>
                    <div className="project_screenshot_controls_wrapper">
                        <button onClick={() => {
                            if (selectedScreenshotIndex > 0) {
                                setSelectedScreenshotIndex(selectedScreenshotIndex - 1);
                            }
                        }}>Back</button>
                        <p>{`${selectedScreenshotIndex + 1} / ${project.screenshots.length}`}</p>
                        <button onClick={() => {
                            if (selectedScreenshotIndex < project.screenshots.length - 1) {
                                setSelectedScreenshotIndex(selectedScreenshotIndex + 1);
                            }
                        }}>Next</button>
                    </div>
                </div>
            </div>
        </Panel>
    ) : null

    const panelProjectLinksWrapper = project.downloadLinks.length > 0 || project.repositoryLinks.length > 0 ? (
        <Panel isMobile={props.isMobile}>
            <div className="project_links_wrapper">
                <div className="project_links_repositories">
                    {repositoryLinks}
                </div>
                <div className="project_links_downloads">
                    {downloadLinks}
                </div>
            </div>
        </Panel>
    ) : null

    return (
        <div className="projectprofilepage">
            {panelProjectWrapper}
            {panelProjectBadgesWrapper}
            {panelProjectScreenshotWrapper}
            {panelProjectLinksWrapper}
        </div>
    )
}

export default ProjectProfile
import React from 'react';
import Panel from '../components/Panel';
import Badge from '../components/Badge';
import projects from '../projects.json';

function Projects() {

    const projectLinks = projects.map((project) => {
        const platformBadges = project.platforms.map((platform) => (
            <Badge badgeColor="black" textColor="lightgray" text={platform} />
        ));

        return (
            <a className="project_link" href={`/projects/id/${project.id}`}>
                <Panel>
                    <div className="project_wrapper">
                        <div className="project_icon">
                            <img className="project_icon" src={project.iconUrl} />
                        </div>
                        <div className="project_content">
                            <div className="project_title">
                                <h1>{project.name}</h1>
                                <Badge badgeColor="#555555" textColor="#EEEEEE" text={project.versionLabel} />
                            </div>
                            <div className="project_platform_badges">
                                {platformBadges}
                            </div>
                            <p>{project.shortDescription}</p>
                        </div>
                    </div>
                </Panel>
            </a>
        );
    });

    return (
        <div className="projectspage">
            <Panel>
                <center><h1>Projects</h1></center>
            </Panel>
            {projectLinks}
        </div>
    );
}

export default Projects;  
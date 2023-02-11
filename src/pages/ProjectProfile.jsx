import React from "react";
import { useParams } from "react-router-dom";
import Panel from "../components/Panel";
import Badge from "../components/Badge";

function ProjectProfile() {
    const { projectId } = useParams();

    return (
        <div className="projectprofilepage">
            
        </div>
    );
}

export default ProjectProfile;
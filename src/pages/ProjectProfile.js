"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Panel_1 = __importDefault(require("../components/Panel"));
const Badge_1 = __importDefault(require("../components/Badge"));
const projects_json_1 = __importDefault(require("../projects.json"));
function ProjectProfile(props) {
    const { projectId } = (0, react_router_dom_1.useParams)();
    const [selectedScreenshotIndex, setSelectedScreenshotIndex] = (0, react_1.useState)(0);
    const projectArray = projects_json_1.default.filter((project) => project.id === projectId);
    if (projectArray.length === 0) {
        return (react_1.default.createElement("div", { className: "projectprofilepage" },
            react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
                react_1.default.createElement("center", null,
                    react_1.default.createElement("h1", null, "Project not found.")))));
    }
    else if (projectArray.length > 1) {
        return (react_1.default.createElement("div", { className: "projectprofilepage" },
            react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
                react_1.default.createElement("center", null,
                    react_1.default.createElement("h1", null, "Internal error.")))));
    }
    const project = projectArray[0];
    const platformBadges = project.platforms.map((p) => (react_1.default.createElement(Badge_1.default, { badgeColor: "#333333", textColor: "#EEEEEE", text: p })));
    const technologyBadges = project.technologies.map((t) => (react_1.default.createElement(Badge_1.default, { badgeColor: "#333333", textColor: "#EEEEEE", text: t })));
    const programmingLanguageBadges = project.programmingLanguages.map((l) => (react_1.default.createElement(Badge_1.default, { badgeColor: "#333333", textColor: "#EEEEEE", text: l })));
    const repositoryLinks = project.repositoryLinks.map((repositoryLink) => (react_1.default.createElement("a", { className: "badge", href: repositoryLink.url },
        react_1.default.createElement(Badge_1.default, { badgeColor: "#222222", textColor: "#FFFFFF", text: repositoryLink.description }))));
    const downloadLinks = project.downloadLinks.map((downloadLink) => (react_1.default.createElement("a", { className: "badge", href: downloadLink.url },
        react_1.default.createElement(Badge_1.default, { badgeColor: "#222222", textColor: "#FFFFFF", text: downloadLink.description }))));
    const panelProjectWrapper = (react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
        react_1.default.createElement("div", { className: props.isMobile === true ? "project_mobile_wrapper" : "project_wrapper" },
            react_1.default.createElement("div", { className: "project_icon" },
                react_1.default.createElement("img", { className: "project_icon", src: project.iconUrl })),
            react_1.default.createElement("div", { className: props.isMobile === true ? "project_mobile_content" : "project_content" },
                react_1.default.createElement("div", { className: props.isMobile === true ? "project_mobile_title" : "project_title" },
                    react_1.default.createElement("h1", null, project.name),
                    react_1.default.createElement(Badge_1.default, { badgeColor: "#555555", textColor: "#EEEEEE", text: project.versionLabel })),
                react_1.default.createElement("p", null, project.shortDescription),
                react_1.default.createElement("p", null, project.longDescription)))));
    const panelProjectBadgesWrapper = (react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
        react_1.default.createElement("div", { className: "project_badges_wrapper" },
            react_1.default.createElement("div", { className: "project_badges" }, platformBadges),
            react_1.default.createElement("div", { className: "project_badges" }, technologyBadges),
            react_1.default.createElement("div", { className: "project_badges" }, programmingLanguageBadges))));
    const panelProjectScreenshotWrapper = project.screenshots.length > 0 ? (react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
        react_1.default.createElement("div", { className: props.isMobile === true ? "project_mobile_screenshot_wrapper" : "project_screenshot_wrapper" },
            react_1.default.createElement("div", { className: "project_screenshot_image" },
                react_1.default.createElement("img", { className: props.isMobile === true ? "project_mobile_screenshot_image" : "project_screenshot_image", src: project.screenshots[selectedScreenshotIndex].imageUrl })),
            react_1.default.createElement("div", { className: "project_screenshot_description_wrapper" },
                react_1.default.createElement("p", null, project.screenshots[selectedScreenshotIndex].description),
                react_1.default.createElement("div", { className: "project_screenshot_controls_wrapper" },
                    react_1.default.createElement("button", { onClick: () => {
                            if (selectedScreenshotIndex > 0) {
                                setSelectedScreenshotIndex(selectedScreenshotIndex - 1);
                            }
                        } }, "Back"),
                    react_1.default.createElement("p", null, `${selectedScreenshotIndex + 1} / ${project.screenshots.length}`),
                    react_1.default.createElement("button", { onClick: () => {
                            if (selectedScreenshotIndex < project.screenshots.length - 1) {
                                setSelectedScreenshotIndex(selectedScreenshotIndex + 1);
                            }
                        } }, "Next")))))) : null;
    const panelProjectLinksWrapper = project.downloadLinks.length > 0 || project.repositoryLinks.length > 0 ? (react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
        react_1.default.createElement("div", { className: "project_links_wrapper" },
            react_1.default.createElement("div", { className: "project_links_repositories" }, repositoryLinks),
            react_1.default.createElement("div", { className: "project_links_downloads" }, downloadLinks)))) : null;
    return (react_1.default.createElement("div", { className: "projectprofilepage" },
        panelProjectWrapper,
        panelProjectBadgesWrapper,
        panelProjectScreenshotWrapper,
        panelProjectLinksWrapper));
}
exports.default = ProjectProfile;

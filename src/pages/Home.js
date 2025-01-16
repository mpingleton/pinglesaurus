"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Panel_1 = __importDefault(require("../components/Panel"));
const Badge_1 = __importDefault(require("../components/Badge"));
function Home(props) {
    const homepagePicture = (react_1.default.createElement("div", { id: "homepage_picture" },
        react_1.default.createElement("img", { id: props.isMobile === true ? "homepage_mobile_pinglesaurus" : "homepage_pinglesaurus", src: "/images/pinglesaurus.png", alt: "Pinglesaurus" })));
    const badgeContent = (react_1.default.createElement("div", { className: props.isMobile === true ? "homepage_mobile_badges_wrapper" : "homepage_badges_wrapper" },
        react_1.default.createElement("div", { className: props.isMobile === true ? "homepage_mobile_badges" : "homepage_badges" },
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "C" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "C++" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Java" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Kotlin" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Swift" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "JavaScript" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "TypeScript" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Python" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "HTML" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "CSS" })),
        react_1.default.createElement("div", { className: props.isMobile === true ? "homepage_mobile_badges" : "homepage_badges" },
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "React" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "NodeJS" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Vulkan" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "OpenGL" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Sequelize" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Prisma ORM" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "ExpressJS" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "CUDA" })),
        react_1.default.createElement("div", { className: props.isMobile === true ? "homepage_mobile_badges" : "homepage_badges" },
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "iOS" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Android" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Windows" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Mac" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Linux" }),
            react_1.default.createElement(Badge_1.default, { badgeColor: "black", textColor: "lightgray", text: "Web" }))));
    const homepageContent = (react_1.default.createElement("div", { id: "homepage_content" },
        react_1.default.createElement("center", null,
            react_1.default.createElement("h1", null, "Hello!"),
            react_1.default.createElement("p", null, "My name is Michael Pingleton. I am a software developer who is well versed in web, desktop, and mobile development alike. I am familiar with several different programming languages, technologies, and platforms:"),
            badgeContent,
            react_1.default.createElement("p", null, "On this site, you will be able to see some of the projects that I am working on by clicking the 'Projects' tab."))));
    return (react_1.default.createElement("div", { className: "homepage" },
        react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
            react_1.default.createElement("div", { id: props.isMobile === true ? "homepage_mobile_wrapper" : "homepage_wrapper" },
                homepagePicture,
                homepageContent))));
}
exports.default = Home;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Panel_1 = __importDefault(require("../components/Panel"));
function Privacy(props) {
    const titlePanel = (react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
        react_1.default.createElement("center", null,
            react_1.default.createElement("h1", null, "Privacy Policy"))));
    const introductionPanel = (react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
        react_1.default.createElement("center", null,
            react_1.default.createElement("h2", null, "Introduction")),
        react_1.default.createElement("p", null, "The purpose of this privacy policy is to inform you of the way your data is collected, processed, and stored while using the pinglesaur.us website. It is important to employ responsible and ethical practices when handling user data.")));
    const p1Panel = (react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
        react_1.default.createElement("center", null,
            react_1.default.createElement("h2", null, "Information You Give")),
        react_1.default.createElement("p", null, "The information you may give includes the email address that you may optionally provide when using the contact form.")));
    const p2Panel = (react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
        react_1.default.createElement("center", null,
            react_1.default.createElement("h2", null, "Logging")),
        react_1.default.createElement("p", null, "Device data, such as IP addresses, may be logged upon accessing pinglesaur.us servers.")));
    const p3Panel = (react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
        react_1.default.createElement("center", null,
            react_1.default.createElement("h2", null, "Third Parties")),
        react_1.default.createElement("p", null, "Third-party servers are used to serve web content, as well as collect, process, and store data.")));
    const p4Panel = (react_1.default.createElement(Panel_1.default, { isMobile: props.isMobile },
        react_1.default.createElement("center", null,
            react_1.default.createElement("h2", null, "Cookies")),
        react_1.default.createElement("p", null, "The pinglesaur.us website does not make use of cookies.")));
    return (react_1.default.createElement("div", { className: "privacypage" },
        titlePanel,
        introductionPanel,
        p1Panel,
        p2Panel,
        p3Panel,
        p4Panel));
}
exports.default = Privacy;

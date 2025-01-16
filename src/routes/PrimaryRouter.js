"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const MainLayout_1 = __importDefault(require("../layouts/MainLayout"));
const MobileLayout_1 = __importDefault(require("../layouts/MobileLayout"));
const Home_1 = __importDefault(require("../pages/Home"));
const ProjectProfile_1 = __importDefault(require("../pages/ProjectProfile"));
const Projects_1 = __importDefault(require("../pages/Projects"));
const Privacy_1 = __importDefault(require("../pages/Privacy"));
function PrimaryRouter() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(MainLayout_1.default, { title: "Home" },
                    react_1.default.createElement(Home_1.default, { isMobile: false })) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/projects/id/:projectId", element: react_1.default.createElement(MainLayout_1.default, { title: "Project" },
                    react_1.default.createElement(ProjectProfile_1.default, null)) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/projects", element: react_1.default.createElement(MainLayout_1.default, { title: "Projects" },
                    react_1.default.createElement(Projects_1.default, { isMobile: false })) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/privacy", element: react_1.default.createElement(MainLayout_1.default, { title: "Privacy Policy" },
                    react_1.default.createElement(Privacy_1.default, { isMobile: false })) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/mobile", element: react_1.default.createElement(MobileLayout_1.default, { title: "Home" },
                    react_1.default.createElement(Home_1.default, { isMobile: true })) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/mobile/projects/id/:projectId", element: react_1.default.createElement(MobileLayout_1.default, { title: "Project" },
                    react_1.default.createElement(ProjectProfile_1.default, { isMobile: true })) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/mobile/projects", element: react_1.default.createElement(MobileLayout_1.default, { title: "Projects" },
                    react_1.default.createElement(Projects_1.default, { isMobile: true })) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/mobile/privacy", element: react_1.default.createElement(MobileLayout_1.default, { title: "Privacy Policy" },
                    react_1.default.createElement(Privacy_1.default, { isMobile: true })) }))));
}
exports.default = PrimaryRouter;

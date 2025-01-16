"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Panel(props) {
    return (react_1.default.createElement("div", { className: props.isMobile ? "mobile_panel" : "panel" }, props.children));
}
exports.default = Panel;

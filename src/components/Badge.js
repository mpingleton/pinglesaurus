"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Badge(props) {
    const badgeStyle = {
        backgroundColor: props.badgeColor,
        color: props.textColor
    };
    return (react_1.default.createElement("div", { className: "badge", style: badgeStyle },
        react_1.default.createElement("span", null, props.text)));
}
exports.default = Badge;

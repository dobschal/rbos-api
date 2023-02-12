import {htmlElement} from "../core/htmlElement.js";
import {link} from "./link.js";

export function navigation() {
    return htmlElement({
        tag: "nav",
        children: [
            link("Home", "/"),
            link("Create XDC", "/create")
        ]
    });
}
import {htmlElement} from "../htmlElement.js";

export function row(children) {
    return htmlElement({
        cssClass: "row",
        children
    });
}
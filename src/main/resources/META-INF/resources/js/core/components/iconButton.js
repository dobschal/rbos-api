import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} iconPath
 * @param {() => void} click
 * @returns {HTMLElement}
 */
export function iconButton(iconPath, click) {
    return htmlElement({
        tag: "button",
        cssClass: "icon-button",
        attributes: {
            style: `background-image: url("${iconPath}")`,
            type: "button"
        },
        events: {
            click
        }
    });
}
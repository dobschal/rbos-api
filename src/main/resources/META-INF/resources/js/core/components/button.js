import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} text
 * @returns {HTMLElement}
 */
export function button(text) {
    return htmlElement({
        tag: "button",
        attributes: {
            type: "submit"
        },
        text
    });
}
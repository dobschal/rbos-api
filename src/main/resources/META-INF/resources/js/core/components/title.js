import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} text
 * @param {HTMLElementConfig} config
 * @returns {HTMLHeadingElement}
 */
export function title(text, config) {
    return htmlElement({
        tag: "h1",
        text,
        ...config
    })
}
import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} text
 * @param {HTMLElementConfig} [config]
 * @returns {HTMLElement}
 */
export function subHeadline(text, config) {
    return htmlElement({
        tag: "h3",
        text,
        ...config
    });
}
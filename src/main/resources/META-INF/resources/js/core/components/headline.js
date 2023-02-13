import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} text
 * @param {HTMLElementConfig} [config]
 * @returns {HTMLElement}
 */
export function headline(text, config) {
    return htmlElement({
        tag: "h2",
        text,
        ...config
    });
}
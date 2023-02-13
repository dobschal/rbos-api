import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} text
 * @param {HTMLElementConfig} [config]
 * @returns {HTMLElement}
 */
export function label(text, config) {
    return htmlElement({
        tag: "label",
        text,
        ...config
    });
}
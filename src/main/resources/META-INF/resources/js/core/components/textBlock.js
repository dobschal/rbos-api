import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} text
 * @param {HTMLElementConfig} [config]
 * @returns {HTMLElement}
 */
export function textBlock(text, config) {
    return htmlElement({
        tag: "p",
        text,
        ...config
    });
}
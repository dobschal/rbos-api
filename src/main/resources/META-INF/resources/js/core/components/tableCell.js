import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} text
 * @param {HTMLElementConfig} [config]
 * @returns {HTMLElement}
 */
export function tableCell(text, config) {
    return htmlElement({
        tag: "td",
        text,
        ...config
    });
}
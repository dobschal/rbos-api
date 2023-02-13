import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} text
 * @param {HTMLElementConfig} [config]
 * @returns {HTMLElement}
 */
export function tableHeadCell(text, config) {
    return htmlElement({
        tag: "th",
        text,
        ...config
    });
}
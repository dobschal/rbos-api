import {htmlElement} from "../htmlElement.js";

/**
 * @param {Array<HTMLElement>} columns
 * @param {HTMLElementConfig} [config]
 * @returns {HTMLElement}
 */
export function tableRow(columns, config) {
    return htmlElement({
        tag: "tr",
        children: columns,
        ...config
    })
}
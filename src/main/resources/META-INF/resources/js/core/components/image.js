import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} src
 * @param {HTMLElementConfig} [config]
 * @returns {HTMLElement}
 */
export function image(src, config) {
    return htmlElement({
        tag: "img",
        attributes: {
            src
        },
        ...config
    })
}
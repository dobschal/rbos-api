import {htmlElement} from "../htmlElement.js";

/**
 * @param {Array<HTMLElement>} [children]
 * @param {string} [cssClass]
 * @param {HTMLElementConfig} [config]
 * @returns {HTMLElement}
 */
export function container(children, cssClass, config) {
    return htmlElement({
        children,
        cssClass,
        ...config
    })
}
import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} text
 * @param {string} [style]
 * @param {string} [type]
 * @param {(Event) => void} [onClick]
 * @returns {HTMLElement}
 */
export function button(text, style, type, onClick) {

    /** @type {HTMLElementConfig} */
    const config = {
        tag: "button",
        cssClass: style ?? "primary",
        attributes: {
            type: type ?? "submit"
        },
        text
    };
    if (typeof onClick === "function") {
        config.events = {
            click: onClick
        };
    }
    return htmlElement(config);
}
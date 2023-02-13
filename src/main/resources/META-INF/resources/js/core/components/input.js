import {container} from "./container.js";
import {label} from "./label.js";
import {htmlElement} from "../htmlElement.js";

/**
 * @typedef {Object} InputConfig
 * @property {string} labelText
 * @property {string} [placeholder]
 * @property {string} [type]
 * @property {boolean} [autoFocus]
 * @property {(string) => void} onChange
 */

/**
 * @param {InputConfig} config
 * @returns {HTMLElement}
 */
export function input(config) {
    return container([
        label(config.labelText),
        htmlElement({
            tag: "input",
            attributes: {
                type: config.type ?? "text",
                placeholder: config.placeholder ?? config.labelText,
            },
            events: {
                input: (e) => config.onChange(e.target.value)
            },
            after() {
                if(config.autoFocus) {
                    setTimeout(() => this.focus());
                }
            }
        })
    ], "input-group");
}
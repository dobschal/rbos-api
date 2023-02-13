import {htmlElement} from "../htmlElement.js";
import {container} from "./container.js";
import {label} from "./label.js";

/**
 * @param {string} labelText
 * @param {string} defaultText
 * @param {string[]} options
 * @param {(string) => void} onChange
 * @returns {HTMLElement}
 */
export function select(labelText, defaultText, options, onChange) {
    return container([
        label(labelText),
        htmlElement({
            tag: "select",
            children: [htmlElement({
                tag: "option",
                attributes: {
                    disabled: "",
                    selected: ""
                },
                text: defaultText
            })].concat(options.map(option => htmlElement({
                tag: "option",
                text: option
            }))),
            events: {
                change: e => onChange(e.target.value)
            }
        })
    ], "input-group");
}
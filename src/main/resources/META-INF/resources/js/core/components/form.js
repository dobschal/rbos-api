import {htmlElement} from "../htmlElement.js";

/**
 * @param {() => void} onSubmit
 * @param {HTMLElement[]} children
 * @returns {HTMLElement}
 */
export function form(onSubmit, children) {
    return htmlElement({
        tag: "form",
        children,
        events: {
            submit(e) {
                e.preventDefault();
                onSubmit();
            }
        }
    });
}
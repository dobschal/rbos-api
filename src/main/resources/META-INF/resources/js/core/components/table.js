import {htmlElement} from "../htmlElement.js";

/**
 *
 * @param {Array<HTMLElement>} headerColumns
 * @param {Array<HTMLElement>} rows
 * @returns {HTMLElement}
 */
export function table(headerColumns, rows) {
    return htmlElement({
        tag: "table",
        children: [
            htmlElement({
                tag: "tr",
                children: headerColumns
            }),
            ...rows
        ]
    });
}
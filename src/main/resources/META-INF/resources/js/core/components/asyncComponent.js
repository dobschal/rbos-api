import {htmlElement} from "../htmlElement.js";

/**
 * @param {() => Promise<HTMLElement>} asyncFn
 * @returns {HTMLElement}
 */
export function asyncComponent(asyncFn) {
    const element = htmlElement({
        cssClass: "loader"
    });
    asyncFn().then(newElement => element.replaceWith(newElement)).catch(console.error);
    return element;
}
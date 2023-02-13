/**
 * @typedef {Object} HTMLElementConfig
 * @property {string} [tag] - default is div
 * @property {string} [text]
 * @property {HTMLElement} [parent]
 * @property {Array<HTMLElement>} [children]
 * @property {{string: string}} [attributes]
 * @property {{string: (Event) => void}} [events]
 * @property {string} [cssClass]
 */

/**
 * @param {HTMLElementConfig} [config]
 * @returns {HTMLElement}
 */
export function htmlElement(config = {}) {
    const element = document.createElement(config.tag ?? "div");
    if(typeof config.text === "string") element.innerText = config.text;
    if(config.parent instanceof HTMLElement) config.parent.appendChild(element);
    if(Array.isArray(config.children)) element.append(...config.children);
    if(config.attributes) {
        Object.keys(config.attributes).forEach(key => {
            element.setAttribute(key, config.attributes[key]);
        });
    }
    if(config.events) {
        Object.keys(config.events).forEach(key => {
            element.addEventListener(key, config.events[key]);
        });
    }
    if(typeof config.cssClass === "string") {
        element.className = config.cssClass;
    }
    return element;
}
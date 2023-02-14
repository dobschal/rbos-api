import {htmlElement} from "./htmlElement.js";
import {container} from "./components/container.js";
import {button} from "./components/button.js";
import {textBlock} from "./components/textBlock.js";

/**
 * @param {string} text
 * @returns {Promise<unknown>}
 */
export function dialog(text) {
    return new Promise((resolve, reject) => {
        const element = htmlElement({
            parent: document.body,
            cssClass: "dialog-wrapper",
            children: [
                container([
                    textBlock(text),
                    button("Cancel", "secondary", "button", () => {
                        element.parentNode.removeChild(element);
                        reject();
                    }),
                    button("OK", "primary", "button", resolve)
                ])
            ]
        });
    });
}
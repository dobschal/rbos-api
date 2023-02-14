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

        function close() {
            element.style.opacity = "0";
            setTimeout(() => {
                element.parentNode.removeChild(element);
            }, 500);
        }

        const element = htmlElement({
            parent: document.body,
            cssClass: "dialog-wrapper",
            children: [
                container([
                    textBlock(text),
                    button("Cancel", "secondary", "button", () => {
                        close();
                        reject();
                    }),
                    button("OK", "primary", "button", resolve)
                ])
            ]
        });
    });
}
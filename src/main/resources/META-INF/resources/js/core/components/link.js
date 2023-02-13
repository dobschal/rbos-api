import {htmlElement} from "../htmlElement.js";
import {applyRouting} from "../router.js";

/**
 * @param {string} text
 * @param {string} target
 * @returns {HTMLElement}
 */
export function link(text, target) {
    return htmlElement({
        tag: "a",
        text,
        attributes: {
            href: target
        },
        events: {
            /**
             * @param {Event} e
             */
            click(e) {
                if(target.startsWith("http://") || target.startsWith("https://")) return;
                e.preventDefault();
                window.history.pushState(null, "", target);
                applyRouting();
            }
        }
    });
}
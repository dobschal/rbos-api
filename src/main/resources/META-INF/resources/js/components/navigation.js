import {htmlElement} from "../core/htmlElement.js";
import {link} from "../core/components/link.js";
import {title} from "../core/components/title.js";

/**
 * @returns {HTMLElement}
 */
export function navigation() {
    return htmlElement({
        tag: "nav",
        children: [
            title("RBOS"),
            link("List XDCs", "/"),
            link("Create XDC", "/create")
        ]
    });
}
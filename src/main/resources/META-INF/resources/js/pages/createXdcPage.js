import {container} from "../core/components/container.js";
import {htmlElement} from "../core/htmlElement.js";
import {headline} from "../core/components/headline.js";
import {iconButton} from "../core/components/iconButton.js";

/**
 * @returns {HTMLElement}
 */
export function createXdcPage() {
    return container([
        _buildPageHeader()
    ], "page");
}

/**
 * @returns {HTMLElement}
 * @private
 */
function _buildPageHeader() {
    return htmlElement({
        cssClass: "page-header",
        children: [
            iconButton("/assets/icon_back.svg", () => {
                window.history.back();
            }),
            headline("Add XDC Record")
        ]
    });
}
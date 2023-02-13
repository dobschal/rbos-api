import {container} from "../core/components/container.js";
import {table} from "../core/components/table.js";
import {tableHeadCell} from "../core/components/tableHeadCell.js";
import {asyncComponent} from "../core/components/asyncComponent.js";
import {htmlElement} from "../core/htmlElement.js";
import {headline} from "../core/components/headline.js";
import {iconButton} from "../core/components/iconButton.js";
import {xdcListItem} from "../components/xdcListItem.js";
import {navigateTo} from "../core/router.js";

/**
 * @returns {HTMLElement}
 */
export function homePage() {
    return asyncComponent(async () => {
        const xdcs = await _loadXdcs();
        return container([
            _buildPageHeader(),
            table(
                _builderTableHeader(),
                xdcs.map(xdcListItem)
            )
        ], "page");
    });
}

/**
 * @returns {Promise<Array<XDC>>}
 * @private
 */
async function _loadXdcs() {
    const rawResponse = await fetch("/api/v1/xdcs");
    return await rawResponse.json();
}

/**
 * @returns {HTMLElement}
 * @private
 */
function _buildPageHeader() {
    return htmlElement({
        cssClass: "page-header",
        children: [
            headline("XDCs"),
            iconButton(
                "/assets/icon_add.svg",
                () => navigateTo("/xdcs/create")
            )
        ]
    });
}

/**
 * @returns {HTMLElement[]}
 * @private
 */
function _builderTableHeader() {
    return [
        tableHeadCell("Name"),
        tableHeadCell("Description"),
        tableHeadCell("XDC")
    ];
}
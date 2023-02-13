import {htmlElement} from "../core/htmlElement.js";
import {container} from "../core/components/container.js";
import {table} from "../core/components/table.js";
import {tableHeadCell} from "../core/components/tableHeadCell.js";
import {tableCell} from "../core/components/tableCell.js";
import {tableRow} from "../core/components/tableRow.js";
import {navigateTo} from "../core/router.js";

/**
 * @returns {HTMLElement}
 */
export function homePage() {
    const tableWrapper = container();
    _renderXdcList(tableWrapper);
    return container([tableWrapper]);
}

/**
 * @param {HTMLElement} tableWrapper
 * @returns {void}
 * @private
 */
async function _renderXdcList(tableWrapper) {
    const xdcs = await _loadXdcs();
    tableWrapper.append(
        table([
            tableHeadCell("Name"),
            tableHeadCell("Description"),
            tableHeadCell("XDC")
        ], xdcs.map(xdc => tableRow([
            tableCell(xdc.name),
            tableCell(xdc.description),
            tableCell("+3°") // TODO: add XDC info
        ], {
            events: {
                /**
                 * @param {Event} e
                 */
                click(e) {
                    navigateTo(`/xdcs/${xdc.name}`);
                }
            }
        })))
    );
}

/**
 * @returns {Promise<Array<XDC>>}
 * @private
 */
async function _loadXdcs() {
    const rawResponse = await fetch("/api/v1/xdcs");
    return await rawResponse.json();
}
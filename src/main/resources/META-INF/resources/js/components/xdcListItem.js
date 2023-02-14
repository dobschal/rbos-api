import {tableRow} from "../core/components/tableRow.js";
import {tableCell} from "../core/components/tableCell.js";
import {navigateTo} from "../core/router.js";

/**
 * @param {XDC} xdc
 * @returns {HTMLElement}
 */
export function xdcListItem(xdc) {
    return tableRow([
        tableCell(xdc.name),
        tableCell(xdc.description),
        tableCell(_getBaselineXdcValue(xdc))
    ], {
        cssClass: "clickable",
        events: {
            click(e) {
                navigateTo(`/xdcs/${xdc.name}`);
            }
        }
    });
}

/**
 * @param {XDC} xdc
 * @returns {string}
 * @private
 */
function _getBaselineXdcValue(xdc) {
    return xdc.properties.find(property => property.traitType === "Baseline XDC")?.value ?? "N/A";
}
import {htmlElement} from "../core/htmlElement.js";
import {container} from "../core/components/container.js";
import {image} from "../core/components/image.js";
import {asyncComponent} from "../core/components/asyncComponent.js";
import {textBlock} from "../core/components/textBlock.js";
import {headline} from "../core/components/headline.js";
import {iconButton} from "../core/components/iconButton.js";
import {row} from "../core/components/row.js";
import {label} from "../core/components/label.js";

/**
 * @param {{name: string}} params
 * @returns {HTMLElement}
 */
export function xdcDetailPage(params) {
    return asyncComponent(async () => {
        const xdc = await _loadXdc(params.name);
        console.log("XDC: ", xdc, params);
        return container([
            _buildPageHeader(xdc),
            row([
                container([
                    container([
                        label("Description"),
                        textBlock(xdc.description)
                    ], "xdc-property-list-item"),
                    ...xdc.properties.flatMap(_renderXdcProperty)
                ]),
                image(xdc.imageUri, {cssClass: "xdc-image"})
            ])
        ], "page");
    });
}

/**
 * @param {string} name
 * @returns {Promise<XDC>}
 * @private
 */
async function _loadXdc(name) {
    const rawResponse = await fetch(`/api/v1/xdcs/${name}`);
    return await rawResponse.json();
}

/**
 * @param {XDC} xdc
 * @returns {HTMLElement}
 * @private
 */
function _buildPageHeader(xdc) {
    return htmlElement({
        cssClass: "page-header",
        children: [
            iconButton("/assets/icon_back.svg", () => {
                window.history.back();
            }),
            headline(xdc.name)
        ]
    });
}

/**
 * @param {XDCProperty} xdcProperty
 * @returns {HTMLElement}
 * @private
 */
function _renderXdcProperty(xdcProperty) {
    return container([
        label(xdcProperty.traitType),
        textBlock(xdcProperty.value + "")
    ], "xdc-property-list-item");
}
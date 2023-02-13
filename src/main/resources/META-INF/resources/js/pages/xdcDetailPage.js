import {htmlElement} from "../core/htmlElement.js";
import {container} from "../core/components/container.js";
import {image} from "../core/components/image.js";

/**
 * @param {{name: string}} params
 * @returns {HTMLElement}
 */
export function xdcDetailPage(params) {
    console.log("XDC Name: ", params);
    const element = htmlElement();
    _renderPage(params.name, element);
    return element;
}

/**
 * @param {HTMLElement} element
 * @param {string} name
 * @returns {void}
 * @private
 */
async function _renderPage(name, element) {
    const xdc = await _loadXdc(name);
    element.append(container([
        htmlElement({
            text: xdc.name
        }),
        htmlElement({
            text: xdc.description
        }),
        image(xdc.imageUri)
    ]));
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
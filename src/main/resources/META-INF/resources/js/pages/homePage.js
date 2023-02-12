import {htmlElement} from "../core/htmlElement.js";

export function homePage() {
    const list = htmlElement();
    _renderList(list);
    return htmlElement({
        text: "Hey",
        children: [list]
    });
}

/**
 * @param {HTMLElement} list
 * @returns {void}
 * @private
 */
async function _renderList(list) {
    const rawResponse = await fetch("/api/v1/xdcs");
    const xdcs = await rawResponse.json();
    console.log("Response: ", xdcs);
    list.append(...xdcs.map(xdc => htmlElement({
        text: xdc.name
    })));
}
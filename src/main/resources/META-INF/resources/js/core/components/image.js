import {htmlElement} from "../htmlElement.js";

/**
 * @param {string} src
 * @param {HTMLElementConfig} [config]
 * @returns {HTMLElement}
 */
export function image(src, config) {

    // Use public gateway for IPFS hosted images, as most browsers
    // do not support direct use.
    if(src.startsWith("ipfs://")) {
        src = src.replace("ipfs://", "https://ipfs.io/ipfs/");
    }

    return htmlElement({
        tag: "img",
        attributes: {
            src
        },
        events: {
            load(e) {
                this.classList.add("loaded");
            }
        },
        ...config
    })
}
import {createXdcPage} from "../pages/createXdcPage.js";
import {homePage} from "../pages/homePage.js";

/** @type {HTMLElement} */
let activePage;

/**
 * @returns {HTMLElement}
 * @private
 */
function _parsePathToPage() {
    switch (window.location.pathname) {
        case "/create": return createXdcPage();
        default: return homePage()
    }
}

export function applyRouting() {
    if(activePage instanceof HTMLElement) {
        activePage.parentNode.removeChild(activePage);
    }
    activePage = _parsePathToPage();
    document.body.append(activePage);
}
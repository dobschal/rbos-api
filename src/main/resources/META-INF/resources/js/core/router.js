/**
 * @typedef {{string: () => HTMLElement}} RoutingConfig
 */

/** @type {HTMLElement} */
let _activePage;

/** @type {RoutingConfig} */
let _routingConfig = {};

/**
 * @param {RoutingConfig} routingConfig
 */
export function setRoutingConfig(routingConfig) {
    _routingConfig = routingConfig;
}

/**
 * @param {string} url
 */
export function navigateTo(url) {
    window.history.pushState(null, "", url);
    applyRouting();
}

export function applyRouting() {
    if(_activePage instanceof HTMLElement) {
        _activePage.parentNode.removeChild(_activePage);
    }
    _activePage = _activePageFromUrl();
    document.body.append(_activePage);
}

/**
 * @returns {HTMLElement}
 * @private
 */
function _activePageFromUrl() {
    const pathParts = window.location.pathname.split("/").filter(s => s);
    if(pathParts.length === 0) {
        return _routingConfig["*"]();
    }
    for(const key in _routingConfig) {
        const potentialPathParts = key.split("/").filter(s => s);
        if(potentialPathParts.length !== pathParts.length) {
            continue;
        }
        let foundPage = true;
        let pathParams = {};
        for(let i = 0; i < pathParts.length; i++) {
            if(potentialPathParts[i].startsWith("{") && potentialPathParts[i].endsWith("}")) {
                const pathParamKey = potentialPathParts[i].slice(1, -1);
                pathParams[pathParamKey] = decodeURIComponent(pathParts[i]);
            } else if(pathParts[i] !== potentialPathParts[i]) {
                foundPage = false;
                break;
            }
        }
        if(foundPage) {
            return _routingConfig[key](pathParams);
        }
    }
    console.error("No matching page found for URL.");
}
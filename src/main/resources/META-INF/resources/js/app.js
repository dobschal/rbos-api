import {applyRouting, setRoutingConfig} from "./core/router.js";
import {createXdcPage} from "./pages/createXdcPage.js";
import {homePage} from "./pages/homePage.js";
import {xdcDetailPage} from "./pages/xdcDetailPage.js";

console.log("🚀 App started...");

setRoutingConfig({
    "/xdcs/create": createXdcPage,
    "/xdcs/{name}": xdcDetailPage,
    "/": homePage
});

applyRouting();
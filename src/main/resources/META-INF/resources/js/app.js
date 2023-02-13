import {navigation} from "./components/navigation.js";
import {applyRouting, setRoutingConfig} from "./core/router.js";
import {createXdcPage} from "./pages/createXdcPage.js";
import {homePage} from "./pages/homePage.js";
import {xdcDetailPage} from "./pages/xdcDetailPage.js";

console.log("🚀 App started...");

document.body.append(navigation());

setRoutingConfig({
    "/create": createXdcPage,
    "/xdcs/{name}": xdcDetailPage,
    "*": homePage
});

applyRouting();
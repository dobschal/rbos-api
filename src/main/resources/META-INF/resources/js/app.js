import {navigation} from "./components/navigation.js";
import {applyRouting} from "./core/router.js";

console.log("🚀 App started...", window.location.pathname);

document.body.append(navigation());

applyRouting();
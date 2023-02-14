import {container} from "../core/components/container.js";
import {htmlElement} from "../core/htmlElement.js";
import {headline} from "../core/components/headline.js";
import {iconButton} from "../core/components/iconButton.js";
import {input} from "../core/components/input.js";
import {asyncComponent} from "../core/components/asyncComponent.js";
import {select} from "../core/components/select.js";
import {form} from "../core/components/form.js";
import {button} from "../core/components/button.js";
import {navigateTo} from "../core/router.js";
import {xdcPropertyInput} from "../components/xdcPropertyInput.js";
import {observable} from "../core/observable.js";

/**
 * @returns {HTMLElement}
 */
export function createXdcPage() {

    const propertyList = container();
    const errorContainer = container();

    const xdc = observable({
        name: "",
        description: "",
        imageUri: "",
        properties: []
    }, () => errorContainer.innerHTML = "");

    return asyncComponent(async () => {
        const traitTypes = await _loadTraitTypes();
        return container([
            _buildPageHeader(),
            errorContainer,
            form( async() => {
                if(!xdc.name || !xdc.description || !xdc.properties || !xdc.imageUri) {
                    _showError("Please enter valid information.", errorContainer);
                    return;
                }
                await fetch("/api/v1/xdcs", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(xdc)
                });
                navigateTo("/");
            }, [
                input({
                    labelText: "Name",
                    autoFocus: true,
                    onChange: name => xdc.name = name
                }),
                input({
                    labelText: "Description",
                    onChange: description => xdc.description = description
                }),
                input({
                    labelText: "Image URI",
                    onChange: imageUri => xdc.imageUri = imageUri
                }),
                propertyList,
                button(
                    "Add Property",
                    "secondary",
                    "button",
                    () => {
                        const index = xdc.properties.length;
                        xdc.properties.push(null);
                        propertyList.append(
                            xdcPropertyInput(
                                traitTypes,
                                (property) => {
                                    xdc.properties[index] = property;
                                }));
                    }
                ),
                button("Save")
            ])
        ], "page");
    });
}

/**
 * @returns {Promise<string[]>}
 * @private
 */
async function _loadTraitTypes() {
    const rawResponse = await fetch("/api/v1/xdcs/trait-types");
    return await rawResponse.json();
}

/**
 * @returns {HTMLElement}
 * @private
 */
function _buildPageHeader() {
    return htmlElement({
        cssClass: "page-header",
        children: [
            iconButton("/assets/icon_back.svg", () => {
                window.history.back();
            }),
            headline("Add XDC Record")
        ]
    });
}

/**
 * @param {string} text
 * @param {HTMLElement} container
 * @private
 */
function _showError(text, container) {
    container.append(
        htmlElement({
            cssClass: "error",
            text
        })
    );
}
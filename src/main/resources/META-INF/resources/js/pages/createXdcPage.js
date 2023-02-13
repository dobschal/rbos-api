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

/**
 * @returns {HTMLElement}
 */
export function createXdcPage() {

    const xdc = {
        name: "",
        description: "",
        imageUri: "",
        properties: [{
            traitType: "",
            value: ""
        }]
    };

    return asyncComponent(async () => {
        const traitTypes = await _loadTraitTypes();
        return container([
            _buildPageHeader(),
            form( async() => {
                // TODO: validate content
                console.log("Post: ", xdc);
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
                _buildPropertyInput(
                    traitTypes,
                    xdc.properties[0]
                ),
                // TODO: Add more properties
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

function _buildPropertyInput(traitTypes, trait) {
    return container([
        select(
            "Trait Type",
            "Select Trait",
            traitTypes,
            traitType => trait.traitType = traitType
        ),
        input({
            labelText: "Trait Value",
            onChange: value => trait.value = value
        })
    ], "xdc-property-input");
}
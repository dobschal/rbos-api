import {container} from "../core/components/container.js";
import {select} from "../core/components/select.js";
import {input} from "../core/components/input.js";
import {observable} from "../core/observable.js";

export function xdcPropertyInput(traitTypes, onChange) {

    const trait = observable(/** @type {XDCProperty} */ {
        traitType: undefined,
        value: undefined
    }, () => onChange(trait));

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
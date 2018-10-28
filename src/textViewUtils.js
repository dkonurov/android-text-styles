import {styleToArray} from "./util";

export function getAttributes(style) {
    const element = {
        "TextView": {
            _attributes: {},
        }
    };
    let items = styleToArray(style);
    for (let key in items) {
        element.TextView._attributes[key] = items[key];
    }
    return element;
}

export function removeNotOverrideAttributes(parentStyle, current, name) {
    let childAttributes = Object.assign({}, current.TextView._attributes);
    let parentAttributes = Object.assign({}, parentStyle.TextView._attributes);
    for (let index in childAttributes) {
        for (let parentIndex in parentAttributes) {
            if (parentIndex === index) {
                let type = childAttributes[index];
                let parentItem = parentAttributes[parentIndex];
                if (type === parentItem) {
                    delete childAttributes[index];
                }
            }
        }
    }
    if (Object.keys(childAttributes).length >= 3) {
        return;
    }
    current.TextView._attributes = childAttributes;
    current.TextView._attributes["style"] = name;
}
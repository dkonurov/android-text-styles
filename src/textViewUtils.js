import {styleToArray} from "./util";

export function getAttributes(style) {
    const element = {
        "TextView": {
            _attributes: {},
        }
    };
    var items = styleToArray(style, true);
    for (var key in items) {
        element.TextView._attributes[key] = items[key];
    }
    return element;
}

export function removeNotOverrideAttributes(parentStyle, current, name) {
    let childAttributes = Object.assign({}, current.TextView._attributes);
    let parentAttributes = Object.assign({}, parentStyle.TextView._attributes);
    for (var index in childAttributes) {
        for (var parentIndex in parentAttributes) {
            if (parentIndex === index) {
                var type = childAttributes[index];
                var parentItem = parentAttributes[parentIndex];
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
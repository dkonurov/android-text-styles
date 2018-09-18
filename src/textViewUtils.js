import {styleToArray} from "./util";

export function getAttributes(style) {
    const element = {
        "TextView": {
            _attributes: {
                "android:textSize": style.fontSize + "sp"
            },
        }
    };
    styleToArray(style).forEach(function (value, key) {
        element.TextView._attributes[key] = value;
    });
    return element;
}

export function removeNotOverrideAttributes(parentStyle, current, name) {
    for (var index in current.TextView._attributes) {
        for (var parentIndex in parentStyle.TextView._attributes) {
            if (parentIndex === index) {
                var type = current.TextView._attributes[index];
                var parentItem = current.TextView._attributes[parentIndex];
                if (type === parentItem) {
                    delete current.TextView._attributes[index];
                }
            }
        }
    }
    current.TextView._attributes["style"] = name;
}
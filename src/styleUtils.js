import {styleToArray} from "./util";

function createStyleItem(name, text) {
    return {
        _attributes: {
            name: name
        },
        _text: text
    };
}

function getItems(style) {
    const element = {
        _attributes: {
            name: style.name
        },
        item: [],

    };
    let items = styleToArray(style);
    for(let key in items) {
        element.item.push(createStyleItem(key, items[key]));
    }
    return element;
}

function removeNotOverride(parentStyle, current) {
    current.item = current.item.filter(function (type) {
        for (let parentIndex in parentStyle.item) {
            let parentItem = parentStyle.item[parentIndex];
            if (type._attributes.name === parentItem._attributes.name && type._text === parentItem._text) {
                return false;
            }
        }
        return true;
    });
}

export function findSimilarStyle(search, textStyles) {
    var find = null;
    var count = -1;
    textStyles.forEach(function (item) {
        var delta = 0;
        for (var index in search) {
            var first = search[index];
            var second = item[index];
            if (first && typeof first === 'object') {
                if (second === undefined) {
                    continue;
                }
                if (first.r === second.r && first.g === second.g &&
                    first.b === second.b && first.a === second.a) {
                    delta++
                }
            } else {
                if (first === second) {
                    delta++;
                }
            }
        }
        if (delta > count && delta > 5) {
            find = item;
            count = delta;
        }
    });
    return find;
}

export {
    getItems, removeNotOverride
}
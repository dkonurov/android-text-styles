function generateColor(color) {
    const hex = color.toHex();
    const text = hex.a !== "ff" ? hex.a : "";
    return text + "" + hex.r + hex.g + hex.b;
}

function getRTLTextAlignment(alignment) {
    if (alignment === "center") {
        return "center"
    } else if (alignment === "left") {
        return "start"
    } else {
        return "end"
    }
}

function createStyleItem(name, text) {
    return {
        _attributes: {
            name: name
        },
        _text: text
    };
}

function getTextStyle(style) {
    var textStyle = style.fontStyle === "italic" ? style.fontStyle + "|" : "";
    textStyle += style.fontWeight === 700 ? "bold" : "normal";
    return textStyle;
}

function getItems(style) {
    var element = {
        _attributes: {
            name: style.name
        },
        item: [
            createStyleItem("android:textSize", style.fontSize + "sp")
        ],

    };
    const lineSpace = style.lineHeight - style.fontSize;
    if (lineSpace > 0) {
        element.item.push(createStyleItem("android:lineSpacingExtra", lineSpace + "sp"));
    }
    if (style.hasOwnProperty("textAlign") && style.textAlign !== undefined) {
        element.item.push(createStyleItem("android:gravity", getRTLTextAlignment(style.textAlign)));
    }

    element.item.push(createStyleItem("android:textStyle", getTextStyle(style)));

    if (style.hasOwnProperty("color")) {
        if (style.color.name !== undefined) {
            element.item.push(createStyleItem("android:textColor", style.color.name));
        } else {
            element.item.push(createStyleItem("android:textColor", generateColor(style.color)));
        }

    }
    return element
}

function removeNotOverride(parentStyle, current) {
    current.item = current.item.filter(function (type) {
        for (var parentIndex in parentStyle.item) {
            var parentItem = parentStyle.item[parentIndex];
            if (type._attributes.name === parentItem._attributes.name && type._text === parentItem._text) {
                return false;
            }
        }
        return true;
    });
}

export {
    getItems, generateColor, removeNotOverride
}
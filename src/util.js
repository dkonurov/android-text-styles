export function generateColor(color) {
    const hex = color.toHex();
    const text = hex.a !== "ff" ? hex.a : "";
    return text + "" + hex.r + hex.g + hex.b;
}

export function getRTLTextAlignment(alignment) {
    if (alignment === "center") {
        return "center"
    } else if (alignment === "left") {
        return "start"
    } else {
        return "end"
    }
}

export function getTextStyle(style) {
    var textStyle = style.fontStyle === "italic" ? style.fontStyle + "|" : "";
    textStyle += style.fontWeight === 700 ? "bold" : "normal";
    return textStyle;
}

export function styleToArray(style, isLink) {
    var attributes = {};
    attributes["android:textSize"] = style.fontSize + "sp";
    const lineSpace = style.lineHeight - style.fontSize;
    if (lineSpace > 0) {
        attributes["android:lineSpacingExtra"] = lineSpace + "sp";
    }
    if (style.hasOwnProperty("textAlign") && style.textAlign !== undefined) {
        attributes["android:gravity"] = getRTLTextAlignment(style.textAlign);
    }

    attributes["android:textStyle"] = getTextStyle(style);

    if (style.hasOwnProperty("color")) {
        if (style.color.name !== undefined) {
            if (isLink) {
                attributes["android:textColor"] = "@color/" + style.color.name;
            } else {
                attributes["android:textColor"] = style.color.name;
            }
        } else {
            attributes["android:textColor"] = "#" + generateColor(style.color);
        }
    }
    if (style.letterSpacing !== 0 && style.letterSpacing !== undefined) {
        attributes["android:letterSpacing"] = style.letterSpacing;
    }
    return attributes;
}
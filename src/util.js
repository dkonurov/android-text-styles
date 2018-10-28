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

function textSize(style) {
    return style.fontSize + "sp";
}

function getLineSpace(style) {
    const lineSpace = style.lineHeight - style.fontSize;
    if (lineSpace > 0) {
        return lineSpace + "sp";
    } else {
        return null
    }
}

function getGravity(style) {
    if (style.hasOwnProperty("textAlign") && style.textAlign !== undefined) {
        return getRTLTextAlignment(style.textAlign);
    } else {
        return null;
    }
}

function getColor(style) {
    if (style.hasOwnProperty("color")) {
        if (style.color.name !== undefined) {
            return "@color/" + style.color.name;
        } else {
            return "#" + generateColor(style.color);
        }
    }
    return null;
}

function getLetterSpacing(style) {
    if (style.letterSpacing !== 0 && style.letterSpacing !== undefined) {
        return style.letterSpacing;
    } else {
        return null
    }
}

export function styleToArray(style) {
    let attributes = {};
    attributes["android:textSize"] = textSize(style);
    const lineSpace = getLineSpace(style);
    if (lineSpace !== null) {
        attributes["android:lineSpacingExtra"] = lineSpace;
    }
    const gravity = getGravity(style);
    if (gravity !== null) {
        attributes["android:gravity"] = gravity
    }

    attributes["android:textStyle"] = getTextStyle(style);

    let color = getColor(style);
    if (color !== null) {
        attributes["android:textColor"] = color
    }

    let letterSpacing = getLetterSpacing(style);
    if (letterSpacing !== null) {
        attributes["android:letterSpacing"] = letterSpacing
    }
    return attributes;
}
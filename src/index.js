import {getItems, removeNotOverride, findSimilarStyle} from "./styleUtils"
import {getAttributes, removeNotOverrideAttributes} from "./textViewUtils";
import {generateColor} from "./util";

var convert = require('xml-js');
var options = {compact: true, ignoreComment: true, spaces: 4};

function styleguideColors(context, colors) {
    var parent = {
        _comment: "Colors",
        _declaration: {
            _attributes: {
                version: "1.0",
                encoding: "utf-8"
            }
        },
        resources: {
            color: []
        }
    };
    colors.forEach(function (item) {
        var template = {
            _attributes: {
                name: item.name
            },
            _text: "#" + generateColor(item)
        };
        parent.resources.color.push(template);
    });
    return {
        code: convert.json2xml(parent, options),
        language: "xml"
    }
}

function styleguideTextStyles(context, textStyles) {
    var styles = {
        _comment: "Colors",
        _declaration: {
            _attributes: {
                version: "1.0",
                encoding: "utf-8"
            }
        },
        resources: {
            style: []
        }
    };
    textStyles.sort(function (first, second) {
        return first.name.length - second.name.length;
    }).forEach(function (style, index) {
        if (index > 0) {
            var current = getItems(style);
            var dotIndex = style.name.lastIndexOf(".");
            if (dotIndex > 0) {
                var parentName = style.name.substring(0, dotIndex);
                var parent = context.project.findTextStyleByName(parentName);
                if (parent !== undefined) {
                    var parentStyle = getItems(parent);
                    current._attributes.parent = parent.name;
                    removeNotOverride(parentStyle, current);
                }
            }
            styles.resources.style.push(current);
        } else {
            styles.resources.style.push(getItems(style))
        }
    });

    return {
        code: convert.json2xml(styles, options),
        language: "xml"
    };
}

function layer(context, selectedLayer) {
    if (selectedLayer.type === "text") {
        let styles = context.project.textStyles;
        let find = findSimilarStyle(selectedLayer.defaultTextStyle, styles);
        let findAttributes = getAttributes(find);
        let defaultStyle = Object.assign({}, selectedLayer.defaultTextStyle);
        if (defaultStyle.color !== undefined) {
            let color = defaultStyle.color;
            let hex = color.toHex();
            let search = {hex: "" + hex.r + hex.g + hex.b, alpha: color.a};
            let findColor = context.project.findColorByHexAndAlpha(search);
            if (findColor !== undefined) {
                defaultStyle.color = findColor;
            }
        }

        let textView = getAttributes(defaultStyle);
        removeNotOverrideAttributes(findAttributes, textView, find.name);
        textView.TextView._attributes["android:layout_width"] = "wrap_content";
        textView.TextView._attributes["android:layout_height"] = "wrap_content";
        textView.TextView._attributes["tools:text"] = selectedLayer.content;
        return {
            code: convert.json2xml(textView, options),
            language: "xml"
        };
    }
}

function exportStyleguideColors(context, colors) {
}

function exportStyleguideTextStyles(context, colors) {
}

function comment(context, text) {
}

export default {
    styleguideTextStyles,
    styleguideColors,
    layer
};

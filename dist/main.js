(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["extension"] = factory();
	else
		root["extension"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;
exports.snakeToCamel = snakeToCamel;
function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

function snakeToCamel(s) {
  var result = s.replace(/(\_\w)/g, function (m) {
    return m[1].toUpperCase();
  });
  return capitalize(result);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(0);

var _layer = __webpack_require__(2);

var XMLWriter = __webpack_require__(3);

var testData = [{
  name: "sSample text styles",
  fontFace: "SFProText-Regular",
  fontSize: 20,
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: "SFProText",
  fontStretch: "normal",
  textAlign: "left",
  weightText: "regular"
}, {
  name: "dSample text style with colors",
  fontFace: "SFProText-Regular",
  fontSize: 20,
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: "SFProText",
  fontStretch: "normal",
  textAlign: "left",
  weightText: "regular",
  color: { r: 255, g: 0, b: 0, a: 1 }
}];

function findColor(array, color) {
  if (color == undefined) {
    return color;
  } else {
    return array.find(function (e) {
      return e.r == color.r && e.g == color.g && e.b == color.b && e.a == color.a;
    }) || color;
  }
}

function layer(context, selectedLayer) {
  return (0, _layer.resolveLayer)(context, selectedLayer);
}

function styleguideColors(context, colors) {}

function styleguideTextStyles(context, textStyles) {
  console.log(JSON.stringify(textStyles));
  var projectColors = context.project.colors;
  var filteredStyles = textStyles.filter(function (element) {
    return element.color != undefined;
  });

  var stylesFormatted = filteredStyles.map(function (element) {
    console.log(element.color);
    var color = findColor(projectColors, element.color);
    console.log("Color: " + color);
    return {
      font: element.fontFamily.toLowerCase() + (0, _util.capitalize)(element.weightText),
      fontSize: element.fontSize,
      colorSnake: color.name
    };
  });

  return {
    code: JSON.stringify(stylesFormatted),
    language: "json"
  };
}

function exportStyleguideColors(context, colors) {}

function exportStyleguideTextStyles(context, colors) {}

function comment(context, text) {}

exports.default = {
  layer,
  styleguideTextStyles
};

/**
<?xml version="1.0" encoding="utf-8"?>
<resources>

    <style name="TextRegular" parent="@android:style/TextAppearance">
        <item name="android:fontFamily">@font/roboto_regular</item>
        <item name="fontFamily">@font/roboto_regular</item>
        <item name="android:background">@null</item>
    </style>

    <style name="TextRegular.Blue">
        <item name="android:textColor">@color/turquoise_blue</item>
    </style>

    <style name="TextRegular.DarkBlueGrey">
        <item name="android:textColor">@color/dark_blue_grey</item>
    </style>

    <style name="TextRegular.DarkBlueGrey.14">
        <item name="android:textSize">14sp</item>
    </style>

    <style name="TextRegular.DarkBlueGrey.15">
        <item name="android:textSize">15sp</item>
    </style>

    <style name="TextRegular.DarkBlueGrey.16">
        <item name="android:textSize">16sp</item>
    </style>

    <style name="TextRegular.DarkBlueGrey.18">
        <item name="android:textSize">18sp</item>
    </style>

    <style name="TextRegular.SlateGrey">
        <item name="android:textColor">@color/slate_grey</item>
    </style>

    <style name="TextRegular.SlateGrey.12">
        <item name="android:textSize">12sp</item>
    </style>

    <style name="TextRegular.SlateGrey.14">
        <item name="android:textSize">14sp</item>
    </style>

    <style name="TextRegular.SlateGrey.15">
        <item name="android:textSize">15sp</item>
    </style>

    <style name="TextRegular.SlateGrey.16">
        <item name="android:textSize">16sp</item>
    </style>
</resources>
 */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveLayer = resolveLayer;

var _util = __webpack_require__(0);

function resolveTextView(selectedLayer) {
  var defaultTextStyle = selectedLayer.textStyles[0].textStyle;
  var defaultTextStyleColor = context.project.findColorEqual(defaultTextStyle.color);
  var textStyleParsed = `${defaultTextStyle.fontFamily}${(0, _util.capitalize)(defaultTextStyle.fontStyle)}.${(0, _util.snakeToCamel)(defaultTextStyleColor.name)}.${defaultTextStyle.fontSize}`;
  var contentNoNewline = selectedLayer.content.replace("\n", "");

  var xmlElement = `<TextView
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:textAppearance="@style/${textStyleParsed}"
  tools:text="${contentNoNewline}"/>
    `;

  return {
    code: xmlElement,
    language: "xml"
  };
}

function resolverImageView(selectedLayer) {
  var xmlElement = `<ImageView
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  app:srcCompat="@drawable/${selectedLayer.name}"/>
  `;

  return {
    code: xmlElement,
    language: "xml"
  };
}

function resolveLayer(context, selectedLayer) {
  if (selectedLayer.type === "text") {
    return resolveTextView(selectedLayer);
  } else if (selectedLayer.exportable === true) {
    return resolverImageView(selectedLayer);
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports) {


function isFalse(s) {
  return typeof s !== 'number' && !s;
}

function strval(s) {
  if (typeof s == 'string') {
    return s;
  }
  else if (typeof s == 'number') {
    return s+'';
  }
  else if (typeof s == 'function') {
    return s();
  }
  else if (s instanceof XMLWriter) {
    return s.toString();
  }
  else throw Error('Bad Parameter');
}

function XMLWriter(indent, callback) {

    if (!(this instanceof XMLWriter)) {
        return new XMLWriter();
    }

    this.name_regex = /[_:A-Za-z][-._:A-Za-z0-9]*/;
    this.indent = indent ? true : false;
    this.indentString = this.indent && typeof indent === 'string' ? indent : '    ';
    this.output = '';
    this.stack = [];
    this.tags = 0;
    this.attributes = 0;
    this.attribute = 0;
    this.texts = 0;
    this.comment = 0;
    this.dtd = 0;
    this.root = '';
    this.pi = 0;
    this.cdata = 0;
    this.started_write = false;
    this.writer;
    this.writer_encoding = 'UTF-8';

    if (typeof callback == 'function') {
        this.writer = callback;
    } else {
        this.writer = function (s, e) {
            this.output += s;
        }
    }
}

XMLWriter.prototype = {
    toString : function () {
        this.flush();
        return this.output;
    },

    indenter : function () {
      if (this.indent) {
        this.write('\n');
        for (var i = 1; i < this.tags; i++) {
          this.write(this.indentString);
        }
      }
    },

    write : function () {
        for (var i = 0; i < arguments.length; i++) {
            this.writer(arguments[i], this.writer_encoding);
        }
    },


    flush : function () {
        for (var i = this.tags; i > 0; i--) {
            this.endElement();
        }
        this.tags = 0;
    },

    startDocument : function (version, encoding, standalone) {
        if (this.tags || this.attributes) return this;

        this.startPI('xml');
        this.startAttribute('version');
        this.text(typeof version == "string" ? version : "1.0");
        this.endAttribute();
        if (typeof encoding == "string") {
            this.startAttribute('encoding');
            this.text(encoding);
            this.endAttribute();
            this.writer_encoding = encoding;
        }
        if (standalone) {
            this.startAttribute('standalone');
            this.text("yes");
            this.endAttribute();
        }
        this.endPI();
        if (!this.indent) {
          this.write('\n');
        }
        return this;
    },

    endDocument : function () {
        if (this.attributes) this.endAttributes();
        return this;
    },

    writeElement : function (name, content) {
        return this.startElement(name).text(content).endElement();
    },

    writeElementNS : function (prefix, name, uri, content) {
        if (!content) {
            content = uri;
        }
        return this.startElementNS(prefix, name, uri).text(content).endElement();
    },

    startElement : function (name) {
        name = strval(name);
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (this.tags === 0 && this.root && this.root !== name) throw Error('Invalid Parameter');
        if (this.attributes) this.endAttributes();
        ++this.tags;
        this.texts = 0;
        if (this.stack.length > 0)
          this.stack[this.stack.length-1].containsTag = true;

        this.stack.push({
            name: name,
            tags: this.tags
        });
        if (this.started_write) this.indenter();
        this.write('<', name);
        this.startAttributes();
        this.started_write = true;
        return this;
    },
    startElementNS : function (prefix, name, uri) {
        prefix = strval(prefix);
        name = strval(name);

        if (!prefix.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (this.attributes) this.endAttributes();
        ++this.tags;
        this.texts = 0;
        if (this.stack.length > 0)
          this.stack[this.stack.length-1].containsTag = true;

        this.stack.push({
            name: prefix + ':' + name,
            tags: this.tags
        });
        if (this.started_write) this.indenter();
        this.write('<', prefix + ':' + name);
        this.startAttributes();
        this.started_write = true;
        return this;
    },

    endElement : function () {
        if (!this.tags) return this;
        var t = this.stack.pop();
        if (this.attributes > 0) {
            if (this.attribute) {
                if (this.texts) this.endAttribute();
                this.endAttribute();
            }
            this.write('/');
            this.endAttributes();
        } else {
            if (t.containsTag) this.indenter();
            this.write('</', t.name, '>');
        }
        --this.tags;
        this.texts = 0;
        return this;
    },

    writeAttribute : function (name, content) {
        if (typeof content == 'function') {
          content = content();
        }
        if (isFalse(content)) {
           return this;
        }
        return this.startAttribute(name).text(content).endAttribute();
    },
    writeAttributeNS : function (prefix, name, uri, content) {
        if (!content) {
            content = uri;
        }
        if (typeof content == 'function') {
          content = content();
        }
        if (isFalse(content)) {
          return this;
        }
        return this.startAttributeNS(prefix, name, uri).text(content).endAttribute();
    },

    startAttributes : function () {
        this.attributes = 1;
        return this;
    },

    endAttributes : function () {
        if (!this.attributes) return this;
        if (this.attribute) this.endAttribute();
        this.attributes = 0;
        this.attribute = 0;
        this.texts = 0;
        this.write('>');
        return this;
    },

    startAttribute : function (name) {
        name = strval(name);
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!this.attributes && !this.pi) return this;
        if (this.attribute) return this;
        this.attribute = 1;
        this.write(' ', name, '="');
        return this;
    },
    startAttributeNS : function (prefix, name, uri) {
        prefix = strval(prefix);
        name = strval(name);

        if (!prefix.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!this.attributes && !this.pi) return this;
        if (this.attribute) return this;
        this.attribute = 1;
        this.write(' ', prefix + ':' + name, '="');
        return this;
    },
    endAttribute : function () {
        if (!this.attribute) return this;
        this.attribute = 0;
        this.texts = 0;
        this.write('"');
        return this;
    },

    text : function (content) {
        content = strval(content);
        if (!this.tags && !this.comment && !this.pi && !this.cdata) return this;
        if (this.attributes && this.attribute) {
            ++this.texts;
            this.write(content
                       .replace(/&/g, '&amp;')
                       .replace(/</g, '&lt;')
                       .replace(/"/g, '&quot;')
                       .replace(/\t/g, '&#x9;')
                       .replace(/\n/g, '&#xA;')
                       .replace(/\r/g, '&#xD;')
                      );
            return this;
        } else if (this.attributes && !this.attribute) {
            this.endAttributes();
        }
        if (this.comment || this.cdata) {
            this.write(content);
        }
        else {
          this.write(content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));
        }
        ++this.texts;
        this.started_write = true;
        return this;
    },

    writeComment : function (content) {
        return this.startComment().text(content).endComment();
    },

    startComment : function () {
        if (this.comment) return this;
        if (this.attributes) this.endAttributes();
        this.indenter();
        this.write('<!--');
        this.comment = 1;
        this.started_write = true;
        return this;
    },

    endComment : function () {
        if (!this.comment) return this;
        this.write('-->');
        this.comment = 0;
        return this;
    },

    writeDocType : function (name, pubid, sysid, subset) {
        return this.startDocType(name, pubid, sysid, subset).endDocType()
    },

    startDocType : function (name, pubid, sysid, subset) {
        if (this.dtd || this.tags) return this;

        name = strval(name);
        pubid = pubid ? strval(pubid) : pubid;
        sysid = sysid ? strval(sysid) : sysid;
        subset = subset ? strval(subset) : subset;

        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (pubid && !pubid.match(/^[\w\-][\w\s\-\/\+\:\.]*/)) throw Error('Invalid Parameter');
        if (sysid && !sysid.match(/^[\w\.][\w\-\/\\\:\.]*/)) throw Error('Invalid Parameter');
        if (subset && !subset.match(/[\w\s\<\>\+\.\!\#\-\?\*\,\(\)\|]*/)) throw Error('Invalid Parameter');

        pubid = pubid ? ' PUBLIC "' + pubid + '"' : (sysid) ? ' SYSTEM' : '';
        sysid = sysid ? ' "' + sysid + '"' : '';
        subset = subset ? ' [' + subset + ']': '';

        if (this.started_write) this.indenter();
        this.write('<!DOCTYPE ', name, pubid, sysid, subset);
        this.root = name;
        this.dtd = 1;
        this.started_write = true;
        return this;
    },

    endDocType : function () {
        if (!this.dtd) return this;
        this.write('>');
        return this;
    },

    writePI : function (name, content) {
        return this.startPI(name).text(content).endPI()
    },

    startPI : function (name) {
        name = strval(name);
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (this.pi) return this;
        if (this.attributes) this.endAttributes();
        if (this.started_write) this.indenter();
        this.write('<?', name);
        this.pi = 1;
        this.started_write = true;
        return this;
    },

    endPI : function () {
        if (!this.pi) return this;
        this.write('?>');
        this.pi = 0;
        return this;
    },

    writeCData : function (content) {
        return this.startCData().text(content).endCData();
    },

    startCData : function () {
        if (this.cdata) return this;
        if (this.attributes) this.endAttributes();
        this.indenter();
        this.write('<![CDATA[');
        this.cdata = 1;
        this.started_write = true;
        return this;
    },

    endCData : function () {
        if (!this.cdata) return this;
        this.write(']]>');
        this.cdata = 0;
        return this;
    },

    writeRaw : function(content) {
        content = strval(content);
        if (!this.tags && !this.comment && !this.pi && !this.cdata) return this;
        if (this.attributes && this.attribute) {
            ++this.texts;
            this.write(content.replace('&', '&amp;').replace('"', '&quot;'));
            return this;
        } else if (this.attributes && !this.attribute) {
            this.endAttributes();
        }
        ++this.texts;
        this.write(content);
        this.started_write = true;
        return this;
    }

}

module.exports = XMLWriter;


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkZDhmNzY5ZDg2MDBjOGE5YzhkNyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94bWwtd3JpdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94bWwtd3JpdGVyL2xpYi94bWwtd3JpdGVyLmpzIl0sIm5hbWVzIjpbImNhcGl0YWxpemUiLCJzbmFrZVRvQ2FtZWwiLCJzIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlc3VsdCIsInJlcGxhY2UiLCJtIiwiWE1MV3JpdGVyIiwicmVxdWlyZSIsInRlc3REYXRhIiwibmFtZSIsImZvbnRGYWNlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRTdHJldGNoIiwidGV4dEFsaWduIiwid2VpZ2h0VGV4dCIsImNvbG9yIiwiciIsImciLCJiIiwiYSIsImZpbmRDb2xvciIsImFycmF5IiwidW5kZWZpbmVkIiwiZmluZCIsImUiLCJsYXllciIsImNvbnRleHQiLCJzZWxlY3RlZExheWVyIiwic3R5bGVndWlkZUNvbG9ycyIsImNvbG9ycyIsInN0eWxlZ3VpZGVUZXh0U3R5bGVzIiwidGV4dFN0eWxlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicHJvamVjdENvbG9ycyIsInByb2plY3QiLCJmaWx0ZXJlZFN0eWxlcyIsImZpbHRlciIsImVsZW1lbnQiLCJzdHlsZXNGb3JtYXR0ZWQiLCJtYXAiLCJmb250IiwidG9Mb3dlckNhc2UiLCJjb2xvclNuYWtlIiwiY29kZSIsImxhbmd1YWdlIiwiZXhwb3J0U3R5bGVndWlkZUNvbG9ycyIsImV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzIiwiY29tbWVudCIsInRleHQiLCJyZXNvbHZlTGF5ZXIiLCJyZXNvbHZlVGV4dFZpZXciLCJkZWZhdWx0VGV4dFN0eWxlIiwidGV4dFN0eWxlIiwiZGVmYXVsdFRleHRTdHlsZUNvbG9yIiwiZmluZENvbG9yRXF1YWwiLCJ0ZXh0U3R5bGVQYXJzZWQiLCJjb250ZW50Tm9OZXdsaW5lIiwiY29udGVudCIsInhtbEVsZW1lbnQiLCJyZXNvbHZlckltYWdlVmlldyIsInR5cGUiLCJleHBvcnRhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O1FDN0RnQkEsVSxHQUFBQSxVO1FBSUFDLFksR0FBQUEsWTtBQUpULFNBQVNELFVBQVQsQ0FBb0JFLENBQXBCLEVBQXVCO0FBQzVCLFNBQU9BLEVBQUUsQ0FBRixFQUFLQyxXQUFMLEtBQXFCRCxFQUFFRSxLQUFGLENBQVEsQ0FBUixDQUE1QjtBQUNEOztBQUVNLFNBQVNILFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQzlCLE1BQU1HLFNBQVNILEVBQUVJLE9BQUYsQ0FBVSxTQUFWLEVBQXFCLFVBQVNDLENBQVQsRUFBWTtBQUM5QyxXQUFPQSxF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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLDJDQUEyQztBQUMzQyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsc0JBQXNCLHNCQUFzQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsdUJBQXVCO0FBQ3pFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJleHRlbnNpb25cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZXh0ZW5zaW9uXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGQ4Zjc2OWQ4NjAwYzhhOWM4ZDciLCJleHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzKSB7XG4gIHJldHVybiBzWzBdLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc25ha2VUb0NhbWVsKHMpIHtcbiAgY29uc3QgcmVzdWx0ID0gcy5yZXBsYWNlKC8oXFxfXFx3KS9nLCBmdW5jdGlvbihtKSB7XG4gICAgcmV0dXJuIG1bMV0udG9VcHBlckNhc2UoKTtcbiAgfSk7XG4gIHJldHVybiBjYXBpdGFsaXplKHJlc3VsdCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC5qcyIsImltcG9ydCB7IHNuYWtlVG9DYW1lbCwgY2FwaXRhbGl6ZSB9IGZyb20gXCIuLi9zcmMvdXRpbFwiO1xuaW1wb3J0IHsgcmVzb2x2ZUxheWVyIH0gZnJvbSBcIi4uL3NyYy9sYXllclwiO1xuXG52YXIgWE1MV3JpdGVyID0gcmVxdWlyZShcInhtbC13cml0ZXJcIik7XG5cbmNvbnN0IHRlc3REYXRhID0gW1xuICB7XG4gICAgbmFtZTogXCJzU2FtcGxlIHRleHQgc3R5bGVzXCIsXG4gICAgZm9udEZhY2U6IFwiU0ZQcm9UZXh0LVJlZ3VsYXJcIixcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICBmb250RmFtaWx5OiBcIlNGUHJvVGV4dFwiLFxuICAgIGZvbnRTdHJldGNoOiBcIm5vcm1hbFwiLFxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgd2VpZ2h0VGV4dDogXCJyZWd1bGFyXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZFNhbXBsZSB0ZXh0IHN0eWxlIHdpdGggY29sb3JzXCIsXG4gICAgZm9udEZhY2U6IFwiU0ZQcm9UZXh0LVJlZ3VsYXJcIixcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICBmb250RmFtaWx5OiBcIlNGUHJvVGV4dFwiLFxuICAgIGZvbnRTdHJldGNoOiBcIm5vcm1hbFwiLFxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgd2VpZ2h0VGV4dDogXCJyZWd1bGFyXCIsXG4gICAgY29sb3I6IHsgcjogMjU1LCBnOiAwLCBiOiAwLCBhOiAxIH1cbiAgfVxuXTtcblxuZnVuY3Rpb24gZmluZENvbG9yKGFycmF5LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICBhcnJheS5maW5kKFxuICAgICAgICBlID0+XG4gICAgICAgICAgZS5yID09IGNvbG9yLnIgJiYgZS5nID09IGNvbG9yLmcgJiYgZS5iID09IGNvbG9yLmIgJiYgZS5hID09IGNvbG9yLmFcbiAgICAgICkgfHwgY29sb3JcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxheWVyKGNvbnRleHQsIHNlbGVjdGVkTGF5ZXIpIHtcbiAgcmV0dXJuIHJlc29sdmVMYXllcihjb250ZXh0LCBzZWxlY3RlZExheWVyKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVndWlkZUNvbG9ycyhjb250ZXh0LCBjb2xvcnMpIHt9XG5cbmZ1bmN0aW9uIHN0eWxlZ3VpZGVUZXh0U3R5bGVzKGNvbnRleHQsIHRleHRTdHlsZXMpIHtcbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGV4dFN0eWxlcykpO1xuICBjb25zdCBwcm9qZWN0Q29sb3JzID0gY29udGV4dC5wcm9qZWN0LmNvbG9ycztcbiAgY29uc3QgZmlsdGVyZWRTdHlsZXMgPSB0ZXh0U3R5bGVzLmZpbHRlcihcbiAgICBlbGVtZW50ID0+IGVsZW1lbnQuY29sb3IgIT0gdW5kZWZpbmVkXG4gICk7XG5cbiAgY29uc3Qgc3R5bGVzRm9ybWF0dGVkID0gZmlsdGVyZWRTdHlsZXMubWFwKGVsZW1lbnQgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuY29sb3IpO1xuICAgIGNvbnN0IGNvbG9yID0gZmluZENvbG9yKHByb2plY3RDb2xvcnMsIGVsZW1lbnQuY29sb3IpO1xuICAgIGNvbnNvbGUubG9nKFwiQ29sb3I6IFwiICsgY29sb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBmb250OiBlbGVtZW50LmZvbnRGYW1pbHkudG9Mb3dlckNhc2UoKSArIGNhcGl0YWxpemUoZWxlbWVudC53ZWlnaHRUZXh0KSxcbiAgICAgIGZvbnRTaXplOiBlbGVtZW50LmZvbnRTaXplLFxuICAgICAgY29sb3JTbmFrZTogY29sb3IubmFtZVxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY29kZTogSlNPTi5zdHJpbmdpZnkoc3R5bGVzRm9ybWF0dGVkKSxcbiAgICBsYW5ndWFnZTogXCJqc29uXCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXhwb3J0U3R5bGVndWlkZUNvbG9ycyhjb250ZXh0LCBjb2xvcnMpIHt9XG5cbmZ1bmN0aW9uIGV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzKGNvbnRleHQsIGNvbG9ycykge31cblxuZnVuY3Rpb24gY29tbWVudChjb250ZXh0LCB0ZXh0KSB7fVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxheWVyLFxuICBzdHlsZWd1aWRlVGV4dFN0eWxlc1xufTtcblxuLyoqXG48P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJ1dGYtOFwiPz5cbjxyZXNvdXJjZXM+XG5cbiAgICA8c3R5bGUgbmFtZT1cIlRleHRSZWd1bGFyXCIgcGFyZW50PVwiQGFuZHJvaWQ6c3R5bGUvVGV4dEFwcGVhcmFuY2VcIj5cbiAgICAgICAgPGl0ZW0gbmFtZT1cImFuZHJvaWQ6Zm9udEZhbWlseVwiPkBmb250L3JvYm90b19yZWd1bGFyPC9pdGVtPlxuICAgICAgICA8aXRlbSBuYW1lPVwiZm9udEZhbWlseVwiPkBmb250L3JvYm90b19yZWd1bGFyPC9pdGVtPlxuICAgICAgICA8aXRlbSBuYW1lPVwiYW5kcm9pZDpiYWNrZ3JvdW5kXCI+QG51bGw8L2l0ZW0+XG4gICAgPC9zdHlsZT5cblxuICAgIDxzdHlsZSBuYW1lPVwiVGV4dFJlZ3VsYXIuQmx1ZVwiPlxuICAgICAgICA8aXRlbSBuYW1lPVwiYW5kcm9pZDp0ZXh0Q29sb3JcIj5AY29sb3IvdHVycXVvaXNlX2JsdWU8L2l0ZW0+XG4gICAgPC9zdHlsZT5cblxuICAgIDxzdHlsZSBuYW1lPVwiVGV4dFJlZ3VsYXIuRGFya0JsdWVHcmV5XCI+XG4gICAgICAgIDxpdGVtIG5hbWU9XCJhbmRyb2lkOnRleHRDb2xvclwiPkBjb2xvci9kYXJrX2JsdWVfZ3JleTwvaXRlbT5cbiAgICA8L3N0eWxlPlxuXG4gICAgPHN0eWxlIG5hbWU9XCJUZXh0UmVndWxhci5EYXJrQmx1ZUdyZXkuMTRcIj5cbiAgICAgICAgPGl0ZW0gbmFtZT1cImFuZHJvaWQ6dGV4dFNpemVcIj4xNHNwPC9pdGVtPlxuICAgIDwvc3R5bGU+XG5cbiAgICA8c3R5bGUgbmFtZT1cIlRleHRSZWd1bGFyLkRhcmtCbHVlR3JleS4xNVwiPlxuICAgICAgICA8aXRlbSBuYW1lPVwiYW5kcm9pZDp0ZXh0U2l6ZVwiPjE1c3A8L2l0ZW0+XG4gICAgPC9zdHlsZT5cblxuICAgIDxzdHlsZSBuYW1lPVwiVGV4dFJlZ3VsYXIuRGFya0JsdWVHcmV5LjE2XCI+XG4gICAgICAgIDxpdGVtIG5hbWU9XCJhbmRyb2lkOnRleHRTaXplXCI+MTZzcDwvaXRlbT5cbiAgICA8L3N0eWxlPlxuXG4gICAgPHN0eWxlIG5hbWU9XCJUZXh0UmVndWxhci5EYXJrQmx1ZUdyZXkuMThcIj5cbiAgICAgICAgPGl0ZW0gbmFtZT1cImFuZHJvaWQ6dGV4dFNpemVcIj4xOHNwPC9pdGVtPlxuICAgIDwvc3R5bGU+XG5cbiAgICA8c3R5bGUgbmFtZT1cIlRleHRSZWd1bGFyLlNsYXRlR3JleVwiPlxuICAgICAgICA8aXRlbSBuYW1lPVwiYW5kcm9pZDp0ZXh0Q29sb3JcIj5AY29sb3Ivc2xhdGVfZ3JleTwvaXRlbT5cbiAgICA8L3N0eWxlPlxuXG4gICAgPHN0eWxlIG5hbWU9XCJUZXh0UmVndWxhci5TbGF0ZUdyZXkuMTJcIj5cbiAgICAgICAgPGl0ZW0gbmFtZT1cImFuZHJvaWQ6dGV4dFNpemVcIj4xMnNwPC9pdGVtPlxuICAgIDwvc3R5bGU+XG5cbiAgICA8c3R5bGUgbmFtZT1cIlRleHRSZWd1bGFyLlNsYXRlR3JleS4xNFwiPlxuICAgICAgICA8aXRlbSBuYW1lPVwiYW5kcm9pZDp0ZXh0U2l6ZVwiPjE0c3A8L2l0ZW0+XG4gICAgPC9zdHlsZT5cblxuICAgIDxzdHlsZSBuYW1lPVwiVGV4dFJlZ3VsYXIuU2xhdGVHcmV5LjE1XCI+XG4gICAgICAgIDxpdGVtIG5hbWU9XCJhbmRyb2lkOnRleHRTaXplXCI+MTVzcDwvaXRlbT5cbiAgICA8L3N0eWxlPlxuXG4gICAgPHN0eWxlIG5hbWU9XCJUZXh0UmVndWxhci5TbGF0ZUdyZXkuMTZcIj5cbiAgICAgICAgPGl0ZW0gbmFtZT1cImFuZHJvaWQ6dGV4dFNpemVcIj4xNnNwPC9pdGVtPlxuICAgIDwvc3R5bGU+XG48L3Jlc291cmNlcz5cbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHsgc25ha2VUb0NhbWVsLCBjYXBpdGFsaXplIH0gZnJvbSBcIi4uL3NyYy91dGlsXCI7XG5cbmZ1bmN0aW9uIHJlc29sdmVUZXh0VmlldyhzZWxlY3RlZExheWVyKSB7XG4gIGNvbnN0IGRlZmF1bHRUZXh0U3R5bGUgPSBzZWxlY3RlZExheWVyLnRleHRTdHlsZXNbMF0udGV4dFN0eWxlO1xuICBjb25zdCBkZWZhdWx0VGV4dFN0eWxlQ29sb3IgPSBjb250ZXh0LnByb2plY3QuZmluZENvbG9yRXF1YWwoXG4gICAgZGVmYXVsdFRleHRTdHlsZS5jb2xvclxuICApO1xuICBjb25zdCB0ZXh0U3R5bGVQYXJzZWQgPSBgJHtkZWZhdWx0VGV4dFN0eWxlLmZvbnRGYW1pbHl9JHtjYXBpdGFsaXplKFxuICAgIGRlZmF1bHRUZXh0U3R5bGUuZm9udFN0eWxlXG4gICl9LiR7c25ha2VUb0NhbWVsKGRlZmF1bHRUZXh0U3R5bGVDb2xvci5uYW1lKX0uJHtkZWZhdWx0VGV4dFN0eWxlLmZvbnRTaXplfWA7XG4gIGNvbnN0IGNvbnRlbnROb05ld2xpbmUgPSBzZWxlY3RlZExheWVyLmNvbnRlbnQucmVwbGFjZShcIlxcblwiLCBcIlwiKTtcblxuICBjb25zdCB4bWxFbGVtZW50ID0gYDxUZXh0Vmlld1xuICBhbmRyb2lkOmxheW91dF93aWR0aD1cIndyYXBfY29udGVudFwiXG4gIGFuZHJvaWQ6bGF5b3V0X2hlaWdodD1cIndyYXBfY29udGVudFwiXG4gIGFuZHJvaWQ6dGV4dEFwcGVhcmFuY2U9XCJAc3R5bGUvJHt0ZXh0U3R5bGVQYXJzZWR9XCJcbiAgdG9vbHM6dGV4dD1cIiR7Y29udGVudE5vTmV3bGluZX1cIi8+XG4gICAgYDtcblxuICByZXR1cm4ge1xuICAgIGNvZGU6IHhtbEVsZW1lbnQsXG4gICAgbGFuZ3VhZ2U6IFwieG1sXCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZXJJbWFnZVZpZXcoc2VsZWN0ZWRMYXllcikge1xuICBjb25zdCB4bWxFbGVtZW50ID0gYDxJbWFnZVZpZXdcbiAgYW5kcm9pZDpsYXlvdXRfd2lkdGg9XCJ3cmFwX2NvbnRlbnRcIlxuICBhbmRyb2lkOmxheW91dF9oZWlnaHQ9XCJ3cmFwX2NvbnRlbnRcIlxuICBhcHA6c3JjQ29tcGF0PVwiQGRyYXdhYmxlLyR7c2VsZWN0ZWRMYXllci5uYW1lfVwiLz5cbiAgYDtcblxuICByZXR1cm4ge1xuICAgIGNvZGU6IHhtbEVsZW1lbnQsXG4gICAgbGFuZ3VhZ2U6IFwieG1sXCJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVMYXllcihjb250ZXh0LCBzZWxlY3RlZExheWVyKSB7XG4gIGlmIChzZWxlY3RlZExheWVyLnR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgcmV0dXJuIHJlc29sdmVUZXh0VmlldyhzZWxlY3RlZExheWVyKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZExheWVyLmV4cG9ydGFibGUgPT09IHRydWUpIHtcbiAgICByZXR1cm4gcmVzb2x2ZXJJbWFnZVZpZXcoc2VsZWN0ZWRMYXllcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXllci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIveG1sLXdyaXRlci5qcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMveG1sLXdyaXRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmZ1bmN0aW9uIGlzRmFsc2Uocykge1xuICByZXR1cm4gdHlwZW9mIHMgIT09ICdudW1iZXInICYmICFzO1xufVxuXG5mdW5jdGlvbiBzdHJ2YWwocykge1xuICBpZiAodHlwZW9mIHMgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcztcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgcyA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBzKycnO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBzID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcygpO1xuICB9XG4gIGVsc2UgaWYgKHMgaW5zdGFuY2VvZiBYTUxXcml0ZXIpIHtcbiAgICByZXR1cm4gcy50b1N0cmluZygpO1xuICB9XG4gIGVsc2UgdGhyb3cgRXJyb3IoJ0JhZCBQYXJhbWV0ZXInKTtcbn1cblxuZnVuY3Rpb24gWE1MV3JpdGVyKGluZGVudCwgY2FsbGJhY2spIHtcblxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBYTUxXcml0ZXIpKSB7XG4gICAgICAgIHJldHVybiBuZXcgWE1MV3JpdGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5uYW1lX3JlZ2V4ID0gL1tfOkEtWmEtel1bLS5fOkEtWmEtejAtOV0qLztcbiAgICB0aGlzLmluZGVudCA9IGluZGVudCA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzLmluZGVudFN0cmluZyA9IHRoaXMuaW5kZW50ICYmIHR5cGVvZiBpbmRlbnQgPT09ICdzdHJpbmcnID8gaW5kZW50IDogJyAgICAnO1xuICAgIHRoaXMub3V0cHV0ID0gJyc7XG4gICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIHRoaXMudGFncyA9IDA7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0gMDtcbiAgICB0aGlzLmF0dHJpYnV0ZSA9IDA7XG4gICAgdGhpcy50ZXh0cyA9IDA7XG4gICAgdGhpcy5jb21tZW50ID0gMDtcbiAgICB0aGlzLmR0ZCA9IDA7XG4gICAgdGhpcy5yb290ID0gJyc7XG4gICAgdGhpcy5waSA9IDA7XG4gICAgdGhpcy5jZGF0YSA9IDA7XG4gICAgdGhpcy5zdGFydGVkX3dyaXRlID0gZmFsc2U7XG4gICAgdGhpcy53cml0ZXI7XG4gICAgdGhpcy53cml0ZXJfZW5jb2RpbmcgPSAnVVRGLTgnO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMud3JpdGVyID0gY2FsbGJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53cml0ZXIgPSBmdW5jdGlvbiAocywgZSkge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQgKz0gcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuWE1MV3JpdGVyLnByb3RvdHlwZSA9IHtcbiAgICB0b1N0cmluZyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mbHVzaCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXQ7XG4gICAgfSxcblxuICAgIGluZGVudGVyIDogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuaW5kZW50KSB7XG4gICAgICAgIHRoaXMud3JpdGUoJ1xcbicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMudGFnczsgaSsrKSB7XG4gICAgICAgICAgdGhpcy53cml0ZSh0aGlzLmluZGVudFN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd3JpdGUgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLndyaXRlcihhcmd1bWVudHNbaV0sIHRoaXMud3JpdGVyX2VuY29kaW5nKTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIGZsdXNoIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50YWdzOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhZ3MgPSAwO1xuICAgIH0sXG5cbiAgICBzdGFydERvY3VtZW50IDogZnVuY3Rpb24gKHZlcnNpb24sIGVuY29kaW5nLCBzdGFuZGFsb25lKSB7XG4gICAgICAgIGlmICh0aGlzLnRhZ3MgfHwgdGhpcy5hdHRyaWJ1dGVzKSByZXR1cm4gdGhpcztcblxuICAgICAgICB0aGlzLnN0YXJ0UEkoJ3htbCcpO1xuICAgICAgICB0aGlzLnN0YXJ0QXR0cmlidXRlKCd2ZXJzaW9uJyk7XG4gICAgICAgIHRoaXMudGV4dCh0eXBlb2YgdmVyc2lvbiA9PSBcInN0cmluZ1wiID8gdmVyc2lvbiA6IFwiMS4wXCIpO1xuICAgICAgICB0aGlzLmVuZEF0dHJpYnV0ZSgpO1xuICAgICAgICBpZiAodHlwZW9mIGVuY29kaW5nID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdHRyaWJ1dGUoJ2VuY29kaW5nJyk7XG4gICAgICAgICAgICB0aGlzLnRleHQoZW5jb2RpbmcpO1xuICAgICAgICAgICAgdGhpcy5lbmRBdHRyaWJ1dGUoKTtcbiAgICAgICAgICAgIHRoaXMud3JpdGVyX2VuY29kaW5nID0gZW5jb2Rpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YW5kYWxvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdHRyaWJ1dGUoJ3N0YW5kYWxvbmUnKTtcbiAgICAgICAgICAgIHRoaXMudGV4dChcInllc1wiKTtcbiAgICAgICAgICAgIHRoaXMuZW5kQXR0cmlidXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmRQSSgpO1xuICAgICAgICBpZiAoIXRoaXMuaW5kZW50KSB7XG4gICAgICAgICAgdGhpcy53cml0ZSgnXFxuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGVuZERvY3VtZW50IDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzKSB0aGlzLmVuZEF0dHJpYnV0ZXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHdyaXRlRWxlbWVudCA6IGZ1bmN0aW9uIChuYW1lLCBjb250ZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0RWxlbWVudChuYW1lKS50ZXh0KGNvbnRlbnQpLmVuZEVsZW1lbnQoKTtcbiAgICB9LFxuXG4gICAgd3JpdGVFbGVtZW50TlMgOiBmdW5jdGlvbiAocHJlZml4LCBuYW1lLCB1cmksIGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICBjb250ZW50ID0gdXJpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0RWxlbWVudE5TKHByZWZpeCwgbmFtZSwgdXJpKS50ZXh0KGNvbnRlbnQpLmVuZEVsZW1lbnQoKTtcbiAgICB9LFxuXG4gICAgc3RhcnRFbGVtZW50IDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgbmFtZSA9IHN0cnZhbChuYW1lKTtcbiAgICAgICAgaWYgKCFuYW1lLm1hdGNoKHRoaXMubmFtZV9yZWdleCkpIHRocm93IEVycm9yKCdJbnZhbGlkIFBhcmFtZXRlcicpO1xuICAgICAgICBpZiAodGhpcy50YWdzID09PSAwICYmIHRoaXMucm9vdCAmJiB0aGlzLnJvb3QgIT09IG5hbWUpIHRocm93IEVycm9yKCdJbnZhbGlkIFBhcmFtZXRlcicpO1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzKSB0aGlzLmVuZEF0dHJpYnV0ZXMoKTtcbiAgICAgICAgKyt0aGlzLnRhZ3M7XG4gICAgICAgIHRoaXMudGV4dHMgPSAwO1xuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPiAwKVxuICAgICAgICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGgtMV0uY29udGFpbnNUYWcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc3RhY2sucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkX3dyaXRlKSB0aGlzLmluZGVudGVyKCk7XG4gICAgICAgIHRoaXMud3JpdGUoJzwnLCBuYW1lKTtcbiAgICAgICAgdGhpcy5zdGFydEF0dHJpYnV0ZXMoKTtcbiAgICAgICAgdGhpcy5zdGFydGVkX3dyaXRlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzdGFydEVsZW1lbnROUyA6IGZ1bmN0aW9uIChwcmVmaXgsIG5hbWUsIHVyaSkge1xuICAgICAgICBwcmVmaXggPSBzdHJ2YWwocHJlZml4KTtcbiAgICAgICAgbmFtZSA9IHN0cnZhbChuYW1lKTtcblxuICAgICAgICBpZiAoIXByZWZpeC5tYXRjaCh0aGlzLm5hbWVfcmVnZXgpKSB0aHJvdyBFcnJvcignSW52YWxpZCBQYXJhbWV0ZXInKTtcbiAgICAgICAgaWYgKCFuYW1lLm1hdGNoKHRoaXMubmFtZV9yZWdleCkpIHRocm93IEVycm9yKCdJbnZhbGlkIFBhcmFtZXRlcicpO1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzKSB0aGlzLmVuZEF0dHJpYnV0ZXMoKTtcbiAgICAgICAgKyt0aGlzLnRhZ3M7XG4gICAgICAgIHRoaXMudGV4dHMgPSAwO1xuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPiAwKVxuICAgICAgICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGgtMV0uY29udGFpbnNUYWcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc3RhY2sucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBwcmVmaXggKyAnOicgKyBuYW1lLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkX3dyaXRlKSB0aGlzLmluZGVudGVyKCk7XG4gICAgICAgIHRoaXMud3JpdGUoJzwnLCBwcmVmaXggKyAnOicgKyBuYW1lKTtcbiAgICAgICAgdGhpcy5zdGFydEF0dHJpYnV0ZXMoKTtcbiAgICAgICAgdGhpcy5zdGFydGVkX3dyaXRlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGVuZEVsZW1lbnQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy50YWdzKSByZXR1cm4gdGhpcztcbiAgICAgICAgdmFyIHQgPSB0aGlzLnN0YWNrLnBvcCgpO1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzID4gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dHMpIHRoaXMuZW5kQXR0cmlidXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRBdHRyaWJ1dGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMud3JpdGUoJy8nKTtcbiAgICAgICAgICAgIHRoaXMuZW5kQXR0cmlidXRlcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHQuY29udGFpbnNUYWcpIHRoaXMuaW5kZW50ZXIoKTtcbiAgICAgICAgICAgIHRoaXMud3JpdGUoJzwvJywgdC5uYW1lLCAnPicpO1xuICAgICAgICB9XG4gICAgICAgIC0tdGhpcy50YWdzO1xuICAgICAgICB0aGlzLnRleHRzID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHdyaXRlQXR0cmlidXRlIDogZnVuY3Rpb24gKG5hbWUsIGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0ZhbHNlKGNvbnRlbnQpKSB7XG4gICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0QXR0cmlidXRlKG5hbWUpLnRleHQoY29udGVudCkuZW5kQXR0cmlidXRlKCk7XG4gICAgfSxcbiAgICB3cml0ZUF0dHJpYnV0ZU5TIDogZnVuY3Rpb24gKHByZWZpeCwgbmFtZSwgdXJpLCBjb250ZW50KSB7XG4gICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgY29udGVudCA9IHVyaTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRmFsc2UoY29udGVudCkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFydEF0dHJpYnV0ZU5TKHByZWZpeCwgbmFtZSwgdXJpKS50ZXh0KGNvbnRlbnQpLmVuZEF0dHJpYnV0ZSgpO1xuICAgIH0sXG5cbiAgICBzdGFydEF0dHJpYnV0ZXMgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IDE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBlbmRBdHRyaWJ1dGVzIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXR0cmlidXRlcykgcmV0dXJuIHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSkgdGhpcy5lbmRBdHRyaWJ1dGUoKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gMDtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSAwO1xuICAgICAgICB0aGlzLnRleHRzID0gMDtcbiAgICAgICAgdGhpcy53cml0ZSgnPicpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgc3RhcnRBdHRyaWJ1dGUgOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBuYW1lID0gc3RydmFsKG5hbWUpO1xuICAgICAgICBpZiAoIW5hbWUubWF0Y2godGhpcy5uYW1lX3JlZ2V4KSkgdGhyb3cgRXJyb3IoJ0ludmFsaWQgUGFyYW1ldGVyJyk7XG4gICAgICAgIGlmICghdGhpcy5hdHRyaWJ1dGVzICYmICF0aGlzLnBpKSByZXR1cm4gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKSByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSAxO1xuICAgICAgICB0aGlzLndyaXRlKCcgJywgbmFtZSwgJz1cIicpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHN0YXJ0QXR0cmlidXRlTlMgOiBmdW5jdGlvbiAocHJlZml4LCBuYW1lLCB1cmkpIHtcbiAgICAgICAgcHJlZml4ID0gc3RydmFsKHByZWZpeCk7XG4gICAgICAgIG5hbWUgPSBzdHJ2YWwobmFtZSk7XG5cbiAgICAgICAgaWYgKCFwcmVmaXgubWF0Y2godGhpcy5uYW1lX3JlZ2V4KSkgdGhyb3cgRXJyb3IoJ0ludmFsaWQgUGFyYW1ldGVyJyk7XG4gICAgICAgIGlmICghbmFtZS5tYXRjaCh0aGlzLm5hbWVfcmVnZXgpKSB0aHJvdyBFcnJvcignSW52YWxpZCBQYXJhbWV0ZXInKTtcbiAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZXMgJiYgIXRoaXMucGkpIHJldHVybiB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUpIHJldHVybiB0aGlzO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IDE7XG4gICAgICAgIHRoaXMud3JpdGUoJyAnLCBwcmVmaXggKyAnOicgKyBuYW1lLCAnPVwiJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZW5kQXR0cmlidXRlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXR0cmlidXRlKSByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSAwO1xuICAgICAgICB0aGlzLnRleHRzID0gMDtcbiAgICAgICAgdGhpcy53cml0ZSgnXCInKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHRleHQgOiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICBjb250ZW50ID0gc3RydmFsKGNvbnRlbnQpO1xuICAgICAgICBpZiAoIXRoaXMudGFncyAmJiAhdGhpcy5jb21tZW50ICYmICF0aGlzLnBpICYmICF0aGlzLmNkYXRhKSByZXR1cm4gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlcyAmJiB0aGlzLmF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgKyt0aGlzLnRleHRzO1xuICAgICAgICAgICAgdGhpcy53cml0ZShjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx0L2csICcmI3g5OycpXG4gICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgJyYjeEE7JylcbiAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcci9nLCAnJiN4RDsnKVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF0dHJpYnV0ZXMgJiYgIXRoaXMuYXR0cmlidXRlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEF0dHJpYnV0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb21tZW50IHx8IHRoaXMuY2RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMud3JpdGUoY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy53cml0ZShjb250ZW50LnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKSk7XG4gICAgICAgIH1cbiAgICAgICAgKyt0aGlzLnRleHRzO1xuICAgICAgICB0aGlzLnN0YXJ0ZWRfd3JpdGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgd3JpdGVDb21tZW50IDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRDb21tZW50KCkudGV4dChjb250ZW50KS5lbmRDb21tZW50KCk7XG4gICAgfSxcblxuICAgIHN0YXJ0Q29tbWVudCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudCkgcmV0dXJuIHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMpIHRoaXMuZW5kQXR0cmlidXRlcygpO1xuICAgICAgICB0aGlzLmluZGVudGVyKCk7XG4gICAgICAgIHRoaXMud3JpdGUoJzwhLS0nKTtcbiAgICAgICAgdGhpcy5jb21tZW50ID0gMTtcbiAgICAgICAgdGhpcy5zdGFydGVkX3dyaXRlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGVuZENvbW1lbnQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb21tZW50KSByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy53cml0ZSgnLS0+Jyk7XG4gICAgICAgIHRoaXMuY29tbWVudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICB3cml0ZURvY1R5cGUgOiBmdW5jdGlvbiAobmFtZSwgcHViaWQsIHN5c2lkLCBzdWJzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnREb2NUeXBlKG5hbWUsIHB1YmlkLCBzeXNpZCwgc3Vic2V0KS5lbmREb2NUeXBlKClcbiAgICB9LFxuXG4gICAgc3RhcnREb2NUeXBlIDogZnVuY3Rpb24gKG5hbWUsIHB1YmlkLCBzeXNpZCwgc3Vic2V0KSB7XG4gICAgICAgIGlmICh0aGlzLmR0ZCB8fCB0aGlzLnRhZ3MpIHJldHVybiB0aGlzO1xuXG4gICAgICAgIG5hbWUgPSBzdHJ2YWwobmFtZSk7XG4gICAgICAgIHB1YmlkID0gcHViaWQgPyBzdHJ2YWwocHViaWQpIDogcHViaWQ7XG4gICAgICAgIHN5c2lkID0gc3lzaWQgPyBzdHJ2YWwoc3lzaWQpIDogc3lzaWQ7XG4gICAgICAgIHN1YnNldCA9IHN1YnNldCA/IHN0cnZhbChzdWJzZXQpIDogc3Vic2V0O1xuXG4gICAgICAgIGlmICghbmFtZS5tYXRjaCh0aGlzLm5hbWVfcmVnZXgpKSB0aHJvdyBFcnJvcignSW52YWxpZCBQYXJhbWV0ZXInKTtcbiAgICAgICAgaWYgKHB1YmlkICYmICFwdWJpZC5tYXRjaCgvXltcXHdcXC1dW1xcd1xcc1xcLVxcL1xcK1xcOlxcLl0qLykpIHRocm93IEVycm9yKCdJbnZhbGlkIFBhcmFtZXRlcicpO1xuICAgICAgICBpZiAoc3lzaWQgJiYgIXN5c2lkLm1hdGNoKC9eW1xcd1xcLl1bXFx3XFwtXFwvXFxcXFxcOlxcLl0qLykpIHRocm93IEVycm9yKCdJbnZhbGlkIFBhcmFtZXRlcicpO1xuICAgICAgICBpZiAoc3Vic2V0ICYmICFzdWJzZXQubWF0Y2goL1tcXHdcXHNcXDxcXD5cXCtcXC5cXCFcXCNcXC1cXD9cXCpcXCxcXChcXClcXHxdKi8pKSB0aHJvdyBFcnJvcignSW52YWxpZCBQYXJhbWV0ZXInKTtcblxuICAgICAgICBwdWJpZCA9IHB1YmlkID8gJyBQVUJMSUMgXCInICsgcHViaWQgKyAnXCInIDogKHN5c2lkKSA/ICcgU1lTVEVNJyA6ICcnO1xuICAgICAgICBzeXNpZCA9IHN5c2lkID8gJyBcIicgKyBzeXNpZCArICdcIicgOiAnJztcbiAgICAgICAgc3Vic2V0ID0gc3Vic2V0ID8gJyBbJyArIHN1YnNldCArICddJzogJyc7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZF93cml0ZSkgdGhpcy5pbmRlbnRlcigpO1xuICAgICAgICB0aGlzLndyaXRlKCc8IURPQ1RZUEUgJywgbmFtZSwgcHViaWQsIHN5c2lkLCBzdWJzZXQpO1xuICAgICAgICB0aGlzLnJvb3QgPSBuYW1lO1xuICAgICAgICB0aGlzLmR0ZCA9IDE7XG4gICAgICAgIHRoaXMuc3RhcnRlZF93cml0ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBlbmREb2NUeXBlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuZHRkKSByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy53cml0ZSgnPicpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgd3JpdGVQSSA6IGZ1bmN0aW9uIChuYW1lLCBjb250ZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0UEkobmFtZSkudGV4dChjb250ZW50KS5lbmRQSSgpXG4gICAgfSxcblxuICAgIHN0YXJ0UEkgOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBuYW1lID0gc3RydmFsKG5hbWUpO1xuICAgICAgICBpZiAoIW5hbWUubWF0Y2godGhpcy5uYW1lX3JlZ2V4KSkgdGhyb3cgRXJyb3IoJ0ludmFsaWQgUGFyYW1ldGVyJyk7XG4gICAgICAgIGlmICh0aGlzLnBpKSByZXR1cm4gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlcykgdGhpcy5lbmRBdHRyaWJ1dGVzKCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWRfd3JpdGUpIHRoaXMuaW5kZW50ZXIoKTtcbiAgICAgICAgdGhpcy53cml0ZSgnPD8nLCBuYW1lKTtcbiAgICAgICAgdGhpcy5waSA9IDE7XG4gICAgICAgIHRoaXMuc3RhcnRlZF93cml0ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBlbmRQSSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBpKSByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy53cml0ZSgnPz4nKTtcbiAgICAgICAgdGhpcy5waSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICB3cml0ZUNEYXRhIDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRDRGF0YSgpLnRleHQoY29udGVudCkuZW5kQ0RhdGEoKTtcbiAgICB9LFxuXG4gICAgc3RhcnRDRGF0YSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2RhdGEpIHJldHVybiB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzKSB0aGlzLmVuZEF0dHJpYnV0ZXMoKTtcbiAgICAgICAgdGhpcy5pbmRlbnRlcigpO1xuICAgICAgICB0aGlzLndyaXRlKCc8IVtDREFUQVsnKTtcbiAgICAgICAgdGhpcy5jZGF0YSA9IDE7XG4gICAgICAgIHRoaXMuc3RhcnRlZF93cml0ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBlbmRDRGF0YSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNkYXRhKSByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy53cml0ZSgnXV0+Jyk7XG4gICAgICAgIHRoaXMuY2RhdGEgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgd3JpdGVSYXcgOiBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJ2YWwoY29udGVudCk7XG4gICAgICAgIGlmICghdGhpcy50YWdzICYmICF0aGlzLmNvbW1lbnQgJiYgIXRoaXMucGkgJiYgIXRoaXMuY2RhdGEpIHJldHVybiB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzICYmIHRoaXMuYXR0cmlidXRlKSB7XG4gICAgICAgICAgICArK3RoaXMudGV4dHM7XG4gICAgICAgICAgICB0aGlzLndyaXRlKGNvbnRlbnQucmVwbGFjZSgnJicsICcmYW1wOycpLnJlcGxhY2UoJ1wiJywgJyZxdW90OycpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0cmlidXRlcyAmJiAhdGhpcy5hdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kQXR0cmlidXRlcygpO1xuICAgICAgICB9XG4gICAgICAgICsrdGhpcy50ZXh0cztcbiAgICAgICAgdGhpcy53cml0ZShjb250ZW50KTtcbiAgICAgICAgdGhpcy5zdGFydGVkX3dyaXRlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gWE1MV3JpdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMveG1sLXdyaXRlci9saWIveG1sLXdyaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
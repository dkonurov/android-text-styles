import { snakeToCamel, capitalize } from "../src/util";

function resolveTextView(selectedLayer) {
  const defaultTextStyle = selectedLayer.textStyles[0].textStyle;
  const defaultTextStyleColor = context.project.findColorEqual(
    defaultTextStyle.color
  );
  const textStyleParsed = `${defaultTextStyle.fontFamily}${capitalize(
    defaultTextStyle.fontStyle
  )}.${snakeToCamel(defaultTextStyleColor.name)}.${defaultTextStyle.fontSize}`;
  const contentNoNewline = selectedLayer.content.replace("\n", "");

  const xmlElement = `<TextView
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
  const xmlElement = `<ImageView
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  app:srcCompat="@drawable/${selectedLayer.name}"/>
  `;

  return {
    code: xmlElement,
    language: "xml"
  };
}

export function resolveLayer(context, selectedLayer) {
  if (selectedLayer.type === "text") {
    return resolveTextView(selectedLayer);
  } else if (selectedLayer.exportable === true) {
    return resolverImageView(selectedLayer);
  }
}

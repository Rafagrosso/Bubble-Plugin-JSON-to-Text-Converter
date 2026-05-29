function(instance, properties, context) {
  function valueToText(value) {
    if (value === null || value === undefined) {
      return "";
    }

    if (typeof value === "object") {
      return JSON.stringify(value);
    }

    return String(value);
  }

  for (var i = 1; i <= 10; i++) {
    instance.publishState("field_" + i, "");
  }

  instance.publishState("success", false);
  instance.publishState("error_message", "");

  if (!properties.json) {
    return;
  }

  var data;

  try {
    data = JSON.parse(properties.json);
  } catch (error) {
    instance.publishState("error_message", "JSON inválido: " + error.message);
    return;
  }

  for (var i = 1; i <= 10; i++) {
    var jsonField = properties["field_" + i + "_json"];

    if (jsonField) {
      instance.publishState("field_" + i, valueToText(data[jsonField]));
    }
  }

  instance.publishState("success", true);
}

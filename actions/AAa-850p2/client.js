async function(properties, context) {
  function valueToText(value) {
    if (value === null || value === undefined) {
      return "";
    }

    if (typeof value === "object") {
      return JSON.stringify(value);
    }

    return String(value);
  }

  var result = {
    success: false,
    error_message: "",
    field_1: "",
    field_2: "",
    field_3: "",
    field_4: "",
    field_5: "",
    field_6: "",
    field_7: "",
    field_8: "",
    field_9: "",
    field_10: ""
  };

  if (!properties.json) {
    result.error_message = "JSON não informado.";
    return result;
  }

  var data;

  try {
    data = JSON.parse(properties.json);
  } catch (error) {
    result.error_message = "JSON inválido: " + error.message;
    return result;
  }

  for (var i = 1; i <= 10; i++) {
    var jsonField = properties["field_" + i + "_json"];

    if (jsonField) {
      result["field_" + i] = valueToText(data[jsonField]);
    }
  }

  result.success = true;
  return result;
}
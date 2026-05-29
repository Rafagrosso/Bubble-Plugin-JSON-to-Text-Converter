function(instance, context) {
  for (var i = 1; i <= 10; i++) {
    instance.publishState("field_" + i, "");
  }

  instance.publishState("success", false);
  instance.publishState("error_message", "");
}

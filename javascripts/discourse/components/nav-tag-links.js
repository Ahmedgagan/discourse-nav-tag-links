import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";

function parseSetting(setting) {
  return setting.split("|").map((value) => {
    const data = value.split(";");

    return {
      name: data[0],
      description: data[1],
      tag: data[2],
    };
  });
}

export default Component.extend({
  @discourseComputed
  navLinks() {
    return parseSetting(settings.Nav_links);
  },
});

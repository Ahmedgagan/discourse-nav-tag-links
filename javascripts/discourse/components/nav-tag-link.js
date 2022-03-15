import Component from "@ember/component";
import FilterModeMixin from "discourse/mixins/filter-mode";
import { inject as service } from "@ember/service";
import discourseComputed from "discourse-common/utils/decorators";
import { getCategoryAndTagUrl } from "discourse/lib/url";

export default Component.extend(FilterModeMixin, {
  router: service(),

  @discourseComputed("router.currentRoute.params", "link.tag")
  active(params, linkTag) {
    if (params.tag_id === linkTag) {
      return true;
    }

    return false;
  },

  @discourseComputed("category")
  subcategories(category) {
    if (!category) {
      return false;
    }

    return category.has_children;
  },

  @discourseComputed("category", "link.tag")
  tagUrl(category, linkTag) {
    return getCategoryAndTagUrl(category, this.subcategories, linkTag);
  },
});

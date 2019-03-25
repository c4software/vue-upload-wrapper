'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));

//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "vue-upload-wrapper",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    triggerFileSelection: function triggerFileSelection() {
      if (!this.disabled) {
        this.$refs.file.click();
      }
    },
    emitSelection: function emitSelection() {
      this.$emit("fileSelected", this.$refs.file.files);
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('span', {
    on: {
      "click": _vm.triggerFileSelection
    }
  }, [_c('input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: false,
      expression: "false"
    }],
    ref: "file",
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.emitSelection
    }
  }), _vm._v(" "), _vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

var vueUploadWrapper = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

module.exports = vueUploadWrapper;

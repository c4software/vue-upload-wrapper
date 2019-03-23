import UploadWrapper from "./component/upload-wrapper.vue";

export default {
  install(Vue) {
    Vue.component("uploadWrapper", UploadWrapper);
  }
};

export { UploadWrapper };

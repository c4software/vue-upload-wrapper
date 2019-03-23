import UploadWrapper from "./component/upload-wrapper";

export default {
  install(Vue) {
    Vue.component("uploadWrapper", UploadWrapper);
  }
};

export { UploadWrapper };

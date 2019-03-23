<template>
  <span @click="triggerFileSelection">
    <input
      @change="emitSelection"
      ref="file"
      type="file"
      v-show="false"
    />
    <slot />
  </span>
</template>

<script>
export default {
  name: "vue-upload-wrapper",
  methods: {
    triggerFileSelection() {
      this.$refs.file.click();
    },
    emitSelection() {
      this.$emit("fileSelected", this.$refs.file.files);
    }
  }
};
</script>

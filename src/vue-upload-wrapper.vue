<template>
  <span @click="triggerFileSelection">
    <input
      @change="emitSelection"
      ref="file"
      type="file"
      :multiple='multiple'
      :accept="accept.join(',')"
      v-show="false"
    />
    <slot />
  </span>
</template>

<script>
export default {
  name: "vue-upload-wrapper",
  props: {
    accept: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    triggerFileSelection() {
      if (!this.disabled) {
        this.$refs.file.click();
      }
    },
    emitSelection() {
      this.$emit("fileSelected", this.$refs.file.files);
    }
  }
};
</script>

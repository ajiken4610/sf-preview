<template>
  <div>
    <div
      class="frame-wrapper block"
      :style="{ paddingTop: ratio + '%' }"
      v-html="frame"
    ></div>
    <div class="block is-size-5 has-text-weight-bold">{{ state.title }}</div>
    <hr />
    <div class="block" v-html="parsedDescription"></div>
  </div>
</template>
<script setup lang="ts">
import { Project } from "@/lib/Project";
import { computed, defineProps } from "vue";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
marked.setOptions({
  breaks: true,
});
const props = defineProps<{ state: Project }>();
const frame = computed(
  () => `<iframe src="${props.state.embedLink}" allowfullscreen></iframe>`
);
const ratio = computed(() => {
  console.log(props.state.embedOrientation);
  if (typeof props.state.embedOrientation === "number") {
    return props.state.embedOrientation;
  } else {
    return props.state.embedOrientation === "horizontal"
      ? (9 / 16) * 100
      : (16 / 9) * 100;
  }
});
const parsedDescription = computed(() =>
  sanitizeHtml(marked.parse(props.state.description))
);
</script>

<style lang="scss">
.frame-wrapper {
  position: relative;
  width: 100%;
}
.frame-wrapper > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <Teleport to="#title">{{ inputState.title }} | サレ祭</Teleport>
  <div class="block">
    <h1 class="is-size-1">サレ祭企画ページプレビュー</h1>
    <span
      >文字色および文字サイズ、背景色等は本番では変更される可能性があります。</span
    >
  </div>
  <div class="level is-mobile block">
    <div class="level-left">
      <div class="level-item" v-if="linkLeft">
        <RouterLink
          :to="{ name: 'view', params: { view: linkLeft } }"
          class="button is-small"
          >&lt;</RouterLink
        >
      </div>
    </div>
    <div class="level-right">
      <div class="level-item" v-if="linkRight">
        <RouterLink
          :to="{ name: 'view', params: { view: linkRight } }"
          class="button is-small"
          >&gt;</RouterLink
        >
      </div>
    </div>
  </div>
  <div class="columns block">
    <ComponentInput
      class="column"
      :class="{ 'is-half': showBoth }"
      v-show="showInput"
      v-model="inputState"
    ></ComponentInput>
    <ComponentPreview
      class="column"
      :class="{ 'is-half': showBoth }"
      v-show="showPreview"
      :state="previewState"
    ></ComponentPreview>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, reactive, watch, ref } from "vue";
import ComponentInput from "@/components/ComponentInput.vue";
import ComponentPreview from "@/components/ComponentPreview.vue";
import { Project } from "@/lib/Project";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps<{ state: string; view: string }>();
const inputState = ref(reactive(JSON.parse(props.state) as Project));
const previewState = ref(inputState.value);
let timeoutId: null | number = null;
watch(
  inputState,
  (val) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      previewState.value = val;
      router.push({ name: "view", params: { state: JSON.stringify(val) } });
    }, 1000);
  },
  { deep: true }
);
const showInput = computed(() => props.view === "i" || props.view === "pi");
const showPreview = computed(() => props.view === "p" || props.view === "pi");
const showBoth = computed(() => showInput.value && showPreview.value);
const linkLeft = computed(() => ({ pi: "i", p: "pi" }[props.view]));
const linkRight = computed(() => ({ pi: "p", i: "pi" }[props.view]));
</script>

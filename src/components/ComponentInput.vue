<template>
  <div>
    <div class="block">
      <h1 class="subtitle">Title</h1>
      <input
        class="input"
        :value="modelValue.title"
        @input="updateTitle(($event.target as HTMLInputElement).value)"
      />
    </div>
    <div class="block">
      <h1 class="subtitle">Description</h1>
      <FlexTextarea
        :modelValue="modelValue.description"
        @update:modelValue="updateDescription($event)"
      ></FlexTextarea>
    </div>
    <div class="block">
      <h1 class="subtitle">EmbedLink</h1>
      <input
        class="input"
        :value="modelValue.embedLink"
        @input="updateLink(($event.target as HTMLInputElement).value)"
      />
    </div>
    <div class="block">
      <h1 class="subtitle">Orientation / Ratio</h1>
      <RadioInput
        :selection="orientationSelection"
        v-model="selectedOrientaiton"
      ></RadioInput>
      <input
        class="input"
        type="number"
        v-model.number="absoluteRatio"
        v-if="selectedOrientaiton === 'absolute'"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Project } from "@/lib/Project";
import { defineProps, defineEmits, ref, Ref, watch } from "vue";
import FlexTextarea from "./FlexTextarea.vue";
import RadioInput from "./RadioInput.vue";
const props = defineProps<{ modelValue: Project }>();
const emit = defineEmits<{ (e: "update:modelValue", value: Project): void }>();
function updateTitle(title: string) {
  emit("update:modelValue", {
    ...props.modelValue,
    title,
  });
}
function updateDescription(description: string) {
  emit("update:modelValue", { ...props.modelValue, description });
}
function updateLink(embedLink: string) {
  emit("update:modelValue", { ...props.modelValue, embedLink });
}
const orientationSelection = {
  horizontal: "水平",
  vertical: "垂直",
  absolute: "絶対",
};
let selectedOrientaiton: Ref<"horizontal" | "vertical" | "absolute">;
let absoluteRatio: Ref<number>;
if (typeof props.modelValue.embedOrientation === "number") {
  selectedOrientaiton = ref("absolute");
  absoluteRatio = ref(props.modelValue.embedOrientation);
} else {
  selectedOrientaiton = ref(props.modelValue.embedOrientation);
  absoluteRatio = ref(100);
}
watch([selectedOrientaiton, absoluteRatio], ([newOrientation, newRatio]) => {
  if (newOrientation === "absolute") {
    emit("update:modelValue", {
      ...props.modelValue,
      embedOrientation: newRatio || 0,
    });
  } else {
    emit("update:modelValue", {
      ...props.modelValue,
      embedOrientation: newOrientation,
    });
  }
});
</script>

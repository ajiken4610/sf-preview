<template>
  <div class="control">
    <label
      class="radio"
      v-for="(currentSelection, key) in selection"
      :key="key"
    >
      <input
        type="radio"
        :name="name"
        @change="updateValue"
        :value="key"
        :checked="key === modelValue"
      />
      {{ currentSelection }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
defineProps<{ selection: { [value: string]: string }; modelValue: string }>();
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
const name = ref(String(Math.random()));
function updateValue(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

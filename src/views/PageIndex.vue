<template>
  <Teleport to="#title">hello</Teleport>
  <div>
    <ComponentInput></ComponentInput>
    <ComponentPreview></ComponentPreview>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import ComponentInput from "@/components/ComponentInput.vue";
import ComponentPreview from "@/components/ComponentPreview.vue";
defineProps<{ state: string; view: string }>();
</script>

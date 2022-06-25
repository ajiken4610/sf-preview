<template>
  <h1 class="is-size-1">404 Not found.</h1>
  <span>{{ "/" + path.join("/") }} doesn't exist on this server.</span>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  path: string[];
}>();
</script>

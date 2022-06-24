<template>Not found error : {{ path }} doesn't exist on this server.</template>
<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  path: string;
}>();
</script>

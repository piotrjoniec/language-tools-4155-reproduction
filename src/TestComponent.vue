<template>
  <div></div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  size: "sm" | "md" | "lg";
}>();

defineEmits(["event"]);
</script>

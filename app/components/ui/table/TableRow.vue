<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  index?: number;
}>();

const isEven = computed(() => {
  if (props.index === undefined) return false;
  return props.index % 2 === 0;
});
</script>

<template>
  <tr
    data-slot="table-row"
    :class="
      cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        props.class,
        isEven ? '' : 'bg-gray-50',
      )
    "
  >
    <slot />
  </tr>
</template>

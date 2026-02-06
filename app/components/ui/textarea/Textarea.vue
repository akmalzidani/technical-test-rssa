<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";
import { ref, watch, onMounted, nextTick } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  defaultValue?: string | number;
  modelValue?: string | number;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});

const textareaRef = ref<HTMLTextAreaElement>();

const adjustHeight = () => {
  if (!textareaRef.value) return;
  textareaRef.value.style.height = "auto";
  textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
};

watch(modelValue, () => {
  nextTick(() => adjustHeight());
});

onMounted(() => {
  adjustHeight();
});
</script>

<template>
  <textarea
    ref="textareaRef"
    v-model="modelValue"
    data-slot="textarea"
    rows="4"
    :class="
      cn(
        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex w-full overflow-hidden rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        props.class,
      )
    "
    @input="adjustHeight"
  />
</template>

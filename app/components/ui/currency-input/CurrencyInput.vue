<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupInput,
} from "@/components/ui/input-group";
import { formatCurrency, parseCurrency } from "@/lib/currency";

const props = defineProps<{
  modelValue?: number;
  placeholder?: string;
  disabled?: boolean;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: 0,
});

const displayValue = ref("");

watch(
  modelValue,
  (newVal) => {
    if (newVal === undefined || newVal === null) {
      displayValue.value = "";
    } else {
      displayValue.value = formatCurrency(newVal);
    }
  },
  { immediate: true }
);

function handleInput(event: Event) {
  const input = event.target as HTMLInputElement;
  const rawValue = input.value;
  const numericValue = parseCurrency(rawValue);
  
  modelValue.value = numericValue;
  nextTick(() => {
    displayValue.value = formatCurrency(numericValue);
  });
}

function handleKeydown(event: KeyboardEvent) {
  const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
    "Home",
    "End",
  ];
  if (allowedKeys.includes(event.key)) return;
  if (event.ctrlKey || event.metaKey) return;
  
  // Allow numbers only
  if (!/^\d$/.test(event.key)) {
    event.preventDefault();
  }
}
</script>

<template>
  <InputGroup>
    <InputGroupAddon>
      <InputGroupText>Rp</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput
      :placeholder="placeholder || '0'"
      :model-value="displayValue"
      :disabled="disabled"
      inputmode="numeric"
      @input="handleInput"
      @keydown="handleKeydown"
    />
  </InputGroup>
</template>

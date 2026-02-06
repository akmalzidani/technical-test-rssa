<script setup lang="ts">
import Navbar from "~/components/layouts/navbar.vue";
</script>

<template>
  <div class="px-4 md:px-8 lg:px-12">
    <Navbar />
    <main class="container mx-auto mt-8 flex flex-col gap-4 py-8">
      <slot />
    </main>
  </div>
</template>

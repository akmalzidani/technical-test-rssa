<script setup></script>

<template>
  <header
    class="sticky top-8 z-50 container mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white px-4 shadow-sm"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[url(/navbar-bg.png)] opacity-30 blur-sm"
    ></div>
    <nav
      class="container mx-auto flex w-full items-center justify-between py-3"
    >
      <div class="flex items-center gap-2">
        <div class="h-12 lg:h-16">
          <img
            src="/pdf-icon.png"
            alt="PDF Icon"
            class="h-full w-full object-contain object-center"
          />
        </div>
        <h1 class="text-base font-bold text-red-600 lg:text-2xl">
          PDF Report Generator
        </h1>
      </div>
      <ul class="flex space-x-4 text-sm lg:text-base">
        <li>
          <NuxtLink
            to="#form-section"
            class="underline-offset-4 hover:underline"
            >Generate PDF</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="#table-section"
            class="underline-offset-4 hover:underline"
            >History Generate</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

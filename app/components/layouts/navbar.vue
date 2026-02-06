<script setup>
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <header
    class="sticky top-5 z-50 container mx-auto rounded-xl border border-gray-200 bg-white px-4 shadow-sm lg:top-8"
    :class="{ 'overflow-hidden': !isMobileMenuOpen }"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[url(/navbar-bg.png)] opacity-10 blur-sm"
    ></div>
    <nav
      class="relative container mx-auto flex w-full items-center justify-between py-3"
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

      <!-- Desktop/Tablet Menu -->
      <ul class="hidden space-x-4 text-sm md:flex lg:text-base">
        <li>
          <NuxtLink
            to="#form-section"
            class="underline-offset-4 hover:underline transition-colors duration-300"
            >Generate PDF</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="#table-section"
            class="underline-offset-4 hover:underline transition-colors duration-300"
            >History Generate</NuxtLink
          >
        </li>
      </ul>

      <!-- Hamburger Button (Mobile Only) -->
      <button
        @click="toggleMobileMenu"
        class="relative z-50 flex flex-col gap-1.5 md:hidden"
        aria-label="Toggle menu"
      >
        <span
          :class="[
            'block h-0.5 w-6 bg-red-600 transition-transform duration-300',
            isMobileMenuOpen ? 'translate-y-2 rotate-45' : '',
          ]"
        ></span>
        <span
          :class="[
            'block h-0.5 w-6 bg-red-600 transition-opacity duration-300',
            isMobileMenuOpen ? 'opacity-0' : '',
          ]"
        ></span>
        <span
          :class="[
            'block h-0.5 w-6 bg-red-600 transition-transform duration-300',
            isMobileMenuOpen ? '-translate-y-2 -rotate-45' : '',
          ]"
        ></span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-show="isMobileMenuOpen"
      class="relative z-40 overflow-hidden rounded-b-lg border-t border-gray-200 bg-white md:hidden"
    >
      <ul class="flex flex-col p-4 text-sm">
        <li>
          <NuxtLink
            to="#form-section"
            @click="closeMobileMenu"
            class="block py-3 transition-colors hover:text-red-600"
            >Generate PDF</NuxtLink
          >
        </li>
        <li class="border-t border-gray-100">
          <NuxtLink
            to="#table-section"
            @click="closeMobileMenu"
            class="block py-3 transition-colors hover:text-red-600"
            >History Generate</NuxtLink
          >
        </li>
      </ul>
    </div>
  </header>
</template>

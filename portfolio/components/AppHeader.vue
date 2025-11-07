<template>
  <header class="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
      <NuxtLink to="/" class="text-sm font-semibold uppercase tracking-[0.4em] text-[#ffdd00]">
        RCR • Portfolio
      </NuxtLink>
      <nav class="hidden items-center gap-6 text-xs uppercase tracking-[0.3em] text-gray-300 md:flex">
        <NuxtLink class="transition hover:text-[#ffdd00]" :to="{ path: '/', hash: '#about' }">À propos</NuxtLink>
        <NuxtLink class="transition hover:text-[#ffdd00]" :to="{ path: '/', hash: '#projects' }">Projets</NuxtLink>
        <NuxtLink class="transition hover:text-[#ffdd00]" :to="{ path: '/', hash: '#highlights' }">Points forts</NuxtLink>
        <NuxtLink class="transition hover:text-[#ffdd00]" to="/docs">Docs</NuxtLink>
      </nav>
      <NuxtLink
        class="rounded-full border border-[#ffdd00] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffdd00] transition hover:bg-[#ffdd00]/10"
        :to="{ path: '/', hash: '#contact' }"
      >
        Contact
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
</script>

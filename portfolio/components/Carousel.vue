<template>
  <section id="highlights" class="bg-[#111] px-6 py-16 text-white">
    <div class="mx-auto max-w-5xl">
      <div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div class="max-w-xl space-y-4">
          <h2 class="text-2xl font-semibold text-[#ffdd00]">Captures de projets</h2>
          <p class="text-sm text-gray-300">
            Une vue rapide des interfaces livrées sur mes projets phares. Cliquez
            sur une capture pour l'ouvrir en plein écran et consulter les
            informations associées.
          </p>
          <div class="flex items-center gap-4 text-sm text-gray-300">
            <button
              type="button"
              class="rounded-full border border-[#ffdd00]/40 px-4 py-2 transition hover:border-[#ffdd00] hover:text-[#ffdd00]"
              @click="prevItem"
            >
              Précédent
            </button>
            <span class="text-xs uppercase tracking-[0.4em] text-[#ffdd00]/60">
              {{ currentIndex + 1 }} / {{ carouselItems.length }}
            </span>
            <button
              type="button"
              class="rounded-full border border-[#ffdd00]/40 px-4 py-2 transition hover:border-[#ffdd00] hover:text-[#ffdd00]"
              @click="nextItem"
            >
              Suivant
            </button>
          </div>
        </div>
        <article class="flex-1 rounded-3xl border border-[#ffdd00]/15 bg-[#161616] p-6 shadow-[0_0_25px_rgba(255,221,0,0.05)]">
          <button
            type="button"
            class="group w-full overflow-hidden rounded-2xl border border-[#ffdd00]/10 transition hover:border-[#ffdd00]/40"
            @click="openModal(activeItem)"
          >
            <img
              :src="activeItem.src"
              :alt="activeItem.alt"
              class="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </button>
          <div class="mt-6 space-y-2">
            <h3 class="text-lg font-semibold text-[#ffdd00]">{{ activeItem.title }}</h3>
            <p class="text-xs uppercase tracking-[0.3em] text-[#ffdd00]/60">
              {{ activeItem.context }}
            </p>
            <p class="text-sm text-gray-200">{{ activeItem.description }}</p>
            <ul class="flex flex-wrap gap-2 pt-2 text-xs uppercase tracking-wide text-[#ffdd00]">
              <li
                v-for="tech in activeItem.stack"
                :key="tech"
                class="rounded-full bg-[#ffdd00]/10 px-3 py-1"
              >
                {{ tech }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="showModal"
        tabindex="0"
        class="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        @keydown.esc="closeModal"
        @click.self="closeModal"
      >
        <div
          class="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-[#ffdd00]/20 bg-[#111] shadow-2xl"
        >
          <header class="flex items-center justify-between border-b border-white/5 px-6 py-4">
            <div>
              <p class="text-sm font-semibold text-[#ffdd00]">{{ modalItem?.title }}</p>
              <p class="text-xs text-gray-300">{{ modalItem?.context }}</p>
            </div>
            <button
              type="button"
              class="rounded-full border border-white/20 p-2 text-gray-300 transition hover:text-white"
              @click="closeModal"
            >
              <span class="sr-only">Fermer</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </header>
          <div v-if="modalItem" class="bg-black">
            <img
              :src="modalItem.src"
              :alt="modalItem.alt"
              class="max-h-[75vh] w-full object-contain"
            />
          </div>
          <div class="space-y-2 border-t border-white/5 px-6 py-4 text-sm text-gray-200">
            <p>{{ modalItem?.description }}</p>
            <ul class="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-[#ffdd00]">
              <li
                v-for="tech in modalItem?.stack || []"
                :key="tech"
                class="rounded-full bg-[#ffdd00]/10 px-3 py-1"
              >
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import betChessImg from '@/assets/betChess.png';
import spaceShooterImg from '@/assets/spaceShooter.png';
import puissance4Img from '@/assets/puissance4.png';

const carouselItems = [
  {
    src: betChessImg,
    alt: 'Interface du projet BetChess',
    title: 'BetChess',
    context: 'Plateforme de paris',
    description:
      "Plateforme de pari sur des matchs d'échecs.",
    stack: ['Nuxt 3', 'TypeScript', 'Tailwind'],
  },
  {
    src: spaceShooterImg,
    alt: 'Capture du SpaceShooter',
    title: 'SpaceShooter',
    context: 'Arcade Phaser.io',
    description:
      "Jeu d'arcade spatial développé avec Phaser.io : gestion des vagues ennemies, collisions et power-ups.",
    stack: ['Phaser', 'JavaScript', 'Canvas API'],
  },
  {
    src: puissance4Img,
    alt: 'Plugin Puissance 4',
    title: 'Puissance 4',
    context: 'Plugin multijoueur',
    description:
      "Plugin de jeu Puissance 4, mode duel local. L'accent est mis sur les animations.",
    stack: ['Vue 3', 'TypeScript', 'SCSS'],
  },
];

const currentIndex = ref(0);
const showModal = ref(false);
const modalItem = ref<typeof carouselItems[number] | null>(null);

const activeItem = computed(() => carouselItems[currentIndex.value]);

function nextItem() {
  currentIndex.value = (currentIndex.value + 1) % carouselItems.length;
}

function prevItem() {
  currentIndex.value =
    (currentIndex.value - 1 + carouselItems.length) % carouselItems.length;
}

function openModal(item: typeof carouselItems[number]) {
  modalItem.value = item;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  modalItem.value = null;
}
</script>

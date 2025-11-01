<template>
  <section id="highlights" class="bg-[#111] px-6 py-16 text-white">
    <div class="mx-auto max-w-5xl">
      <div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div class="max-w-xl space-y-4">
          <h2 class="text-2xl font-semibold text-[#ffdd00]">Points forts</h2>
          <p class="text-sm text-gray-300">
            Un rapide aperçu de ce que j’apporte à une équipe produit :
            collaboration agile, vision centrée utilisateur et documentation
            claire.
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
          <div class="overflow-hidden rounded-2xl border border-[#ffdd00]/10">
            <img
              :src="activeItem.src"
              :alt="activeItem.alt"
              class="h-56 w-full object-cover"
            />
          </div>
          <div class="mt-6 space-y-2">
            <h3 class="text-lg font-semibold text-[#ffdd00]">{{ activeItem.title }}</h3>
            <p class="text-sm text-gray-200">{{ activeItem.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAssetPath } from '~/composables/useAssetPath';

const carouselItems = [
  {
    src: useAssetPath('/images/carousel-agile.png'),
    alt: 'Gestion de projet agile',
    title: 'Organisation agile',
    description:
      "Planification sur Trello, revues hebdo et priorisation continue pour livrer des incréments testables.",
  },
  {
    src: useAssetPath('/images/carousel-collab.png'),
    alt: 'Collaboration et code review',
    title: 'Collaboration continue',
    description:
      "Pair programming, revues de code et documentation technique pour partager la connaissance au sein de l’équipe.",
  },
  {
    src: useAssetPath('/images/hero-portrait.jpg'),
    alt: 'Veille technologique',
    title: 'Veille & montée en compétence',
    description:
      "Veille active sur l’écosystème JavaScript et PHP pour sélectionner les outils adaptés à chaque besoin métier.",
  },
];

const currentIndex = ref(0);

const activeItem = computed(() => carouselItems[currentIndex.value]);

function nextItem() {
  currentIndex.value = (currentIndex.value + 1) % carouselItems.length;
}

function prevItem() {
  currentIndex.value =
    (currentIndex.value - 1 + carouselItems.length) % carouselItems.length;
}
</script>

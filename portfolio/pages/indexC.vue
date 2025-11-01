<template>
  <div class="min-h-screen [font-family:sans-serif] bg-[#111] text-white p-0 m-0">
    <section class="py-[60px] px-5 mx-auto max-w-[800px]">
      <h2 class="text-[#ffdd00] text-2xl mb-6">My Carousel</h2>
      <div class="flex flex-col items-center gap-6">
        <div v-if="selectedItem" class="w-full flex justify-center mb-4">
          <img
            :src="selectedItem.src"
            :alt="selectedItem.alt"
            class="max-w-full md:max-w-[50%] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        <div class="flex flex-col items-center gap-4">
          <div class="flex items-center gap-4">
            <button
              class="px-3 py-2 bg-[#333] rounded hover:bg-[#444]"
              @click="prevGroup"
            >
              Prev
            </button>
            <span class="text-[#ffdd00] font-bold">
              {{ currentGroupIndex + 1 }} / {{ totalGroups }}
            </span>
            <button
              class="px-3 py-2 bg-[#333] rounded hover:bg-[#444]"
              @click="nextGroup"
            >
              Next
            </button>
          </div>

          <div class="flex gap-3">
            <div
              v-for="(item, i) in displayedItems"
              :key="item.src"
              class="cursor-pointer transition-transform duration-200 hover:scale-105"
              @click="selectItem(item)"
            >
              <img
                :src="item.src"
                :alt="item.alt"
                class="w-24 h-24 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const projects = ref([
  { title: 'Project One', description: 'Description for project one.' },
  { title: 'Project Two', description: 'Description for project two.' },
]);

const carouselItems = ref([
  { src: 'images/item1.png', alt: 'Item 1' },
  { src: 'images/item2.png', alt: 'Item 2' },
  { src: 'images/item3.png', alt: 'Item 3' },
  { src: 'images/item4.png', alt: 'Item 4' },
  { src: 'images/item5.png', alt: 'Item 5' },
  { src: 'images/item6.png', alt: 'Item 6' },
  { src: 'images/item7.png', alt: 'Item 7' },
  { src: 'images/item8.png', alt: 'Item 8' },
  { src: 'images/item9.png', alt: 'Item 9' },
]);

const selectedItem = ref(carouselItems.value[0]);

const itemsPerGroup = 3;
const currentGroupIndex = ref(0);

const totalGroups = computed(() => {
  return Math.ceil(carouselItems.value.length / itemsPerGroup);
});

const displayedItems = computed(() => {
  const start = currentGroupIndex.value * itemsPerGroup;
  return carouselItems.value.slice(start, start + itemsPerGroup);
});

function selectItem(item) {
  selectedItem.value = item;
}

function prevGroup() {
  if (currentGroupIndex.value > 0) {
    currentGroupIndex.value--;
  }
}

function nextGroup() {
  if (currentGroupIndex.value < totalGroups.value - 1) {
    currentGroupIndex.value++;
  }
}

</script>

<script setup lang="ts">
const { data: items } = await useFetch('/api/azure-updates');
</script>

<template>
  <div class="p-6 flex flex-col gap-4">
    <div class="font-semibold text-blue-500 text-2xl">Azure Updates</div>

    <div class="flex flex-col gap-4">
      <div
        v-for="item in items"
        :key="item.link"
        class="px-4 py-6 rounded shadow flex flex-col gap-2"
      >
        <h2 class="font-semibold text-lg inline-flex gap-2 items-center">
          <div
            class="px-2 py-1 bg-green-500 text-white inline-block rounded-full text-sm"
          >
            {{ item.category }}
          </div>
          <a :href="item.link" target="_blank" class="underline">
            {{ item.title }}
          </a>
        </h2>
        <div class="line-clamp-4">
          {{ item.description }}
        </div>
        <div></div>
        <div class="text-xs">
          {{ item.pubDate }}
        </div>
      </div>
    </div>
  </div>
</template>

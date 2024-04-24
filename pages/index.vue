<script setup lang="ts">
const { data } = await useFetch('/api/hello');
</script>

<template>
  <div>Nuxt3 App</div>
  <pre>{{ data }}</pre>
</template>

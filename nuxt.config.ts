// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    azure: {
      config: {
        platform: {
          apiRuntime: 'node:18',
        },
      },
    },
  },
});

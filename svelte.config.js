import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-auto'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter determines where your app will be deployed
    adapter: adapter(),

    // If you have a custom alias that you'd like to use
    alias: {
      '$lib': './src/lib'
    }
  }
}

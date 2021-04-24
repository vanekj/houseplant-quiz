import { defineConfig } from 'vite'

import viteVue from './plugins/vite.vue'
import viteCompression from './plugins/vite.compression'
import viteImagemin from './plugins/vite.imagemin'

export default defineConfig({
  plugins: [viteImagemin(), viteCompression(), viteVue()]
})

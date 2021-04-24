import viteCompression from 'vite-plugin-compression'

export default () =>
  viteCompression({
    algorithm: 'brotliCompress'
  })

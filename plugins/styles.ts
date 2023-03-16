import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import type { Plugin } from 'vite'

export default <Plugin> {
    name: 'vite-plugin-css',
    apply: 'build',
    config() {
        return {
            css: {
                postcss: {
                    plugins: [cssnano({ preset: 'default' }), autoprefixer],
                },
            },
        }
    },
}

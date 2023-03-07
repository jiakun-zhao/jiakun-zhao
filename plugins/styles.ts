import type { Plugin } from 'vite'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

export function Styles(): Plugin {
    return {
        name: 'vite-plugin-styles',
        apply: 'build',
        config() {
            const plugins: any[] = [
                cssnano({ preset: 'default' }),
                autoprefixer,
            ]
            return { css: { postcss: { plugins } } }
        },
    }
}

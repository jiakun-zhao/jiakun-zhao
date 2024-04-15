import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/html',
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})

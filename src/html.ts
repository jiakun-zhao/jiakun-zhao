import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypeStringify from 'rehype-stringify'

export async function zip(content: string) {
  const { value } = await unified()
    .use(rehypeParse)
    .use(rehypePresetMinify)
    .use(rehypeStringify, { tightDoctype: false, upperDoctype: true })
    .process(content)
  return value.toString()
}

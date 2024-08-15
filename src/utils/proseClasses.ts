import clsx from 'clsx'

export const markdownProseClasses = clsx(
  'prose prose-sm md:prose-base', // responsive sizes
  'max-w-full', // We always wrap Prose in Section containers, which bring their own max-width
  'text-black',
  'prose-headings:font-bold', // headings font weight
  'prose-headings:mb-2 prose-headings:mt-1', // headings spacing
  'prose-h1:font-serif prose-h1:text-xl md:prose-h1:text-3xl', // h1 size --> entspricht H3 (nicht markdown)
  'prose-h2: prose-h2:text-base md:prose-h2:text-lg', // h2 size
  'prose-h3:text-sm md:prose-h3:text-base', // h3 size
  'prose-h4:text-sm md:prose-h4:text-base', // h4 size
  'prose-li:m-0 prose-li:p-0',
  'prose-a:no-underline',
  'prose-headings:max-w-[690px] prose-p:max-w-[690px] prose-a:max-w-[690px] prose-blockquote:max-w-[690px] prose-code:max-w-[690px] prose-ol:max-w-[690px] prose-ul:max-w-[690px] prose-table:max-w-[690px] prose-hr:max-w-[690px]',
)

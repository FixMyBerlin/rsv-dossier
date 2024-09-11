import { collection, config, fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { contentViewImageDefaultDouble } from './keystatic/utils/contentViewImageDefaultDouble'
import { contentViewImageHorizontal } from './keystatic/utils/contentViewImageHorizontal'
import { contentViewImageSquare } from './keystatic/utils/contentViewImageSquare'
import { contentViewImageVertical } from './keystatic/utils/contentViewImageVertical'

const blogSchema = {
  title: fields.slug({
    name: {
      label: 'Titel',
      validation: { length: { min: 1, max: 80 } },
    },
    slug: {
      description:
        'Bitte keine Änderungen nach initialem Speichern. Keine Großbuchstaben, Umlaute, Sonderzeichen oder Leerzeichen.',
      label: 'Dateiname / URL-Teil',
      validation: { length: { min: 1, max: 80 } },
    },
  }),
  subTitle: fields.text({
    label: 'Untertitel',
    validation: { length: { min: 1, max: 300 } },
  }),
  preview: fields.checkbox({
    label: 'Vorschau (diese Seite wird nicht veröffentlicht, sondern im Vorschaumodus gebaut)',
    description:
      "Die Vorschau ist unter der erwarteten URL + '--preview' erreichbar. Z.B. /kommunikation/beteiligung-inklusiv-gestalten--preview",
    defaultValue: true,
  }),
  type: fields.select({
    label: 'Typ',
    options: [
      { label: 'Artikel', value: 'Artikel' },
      { label: 'Studie', value: 'Studie' },
    ],
    defaultValue: 'Artikel',
  }),
  teaserText: fields.text({
    label: 'Kurzbeschreibung auf Teaser',
    validation: { length: { min: 1, max: 300 } },
  }),
  showOnHome: fields.checkbox({
    label: 'auf Startseite anzeigen',
    defaultValue: false,
  }),
  order: fields.number({
    label: 'Reihenfolge in der Aufzählung',
    validation: { isRequired: true, min: 0 },
  }),
  date: fields.date({
    label: 'Datum des Blogeintrags',
    validation: { isRequired: true },
  }),
  imageCopyright: fields.text({
    label: 'Copyright Bild',
    validation: { length: { min: 1, max: 100 } },
  }),
  uploads: fields.array(
    fields.object({
      name: fields.text({ label: 'Beschriftung', validation: { isRequired: true } }),
      file: fields.file({
        label: 'Datei',
        directory: 'public',
        publicPath: '/',
        validation: { isRequired: true },
      }),
    }),
    {
      itemLabel: (props) => props.fields.name.value || 'Datei',
      label: 'Dateien',
    },
  ),
}

export default config({
  storage: {
    // kind: 'local',
    kind: 'github',
    repo: {
      owner: 'FixMyBerlin',
      name: 'rsv-dossier',
    },
  },
  ui: {
    brand: {
      name: 'RSV-Info',
      // todo tsx format
      // mark: () => <img src="/favicon.svg" height={27} />,
    },
    navigation: {
      Blog: ['planningposts', 'communicationposts'],
    },
  },
  collections: {
    planningposts: collection({
      label: 'Blog Planung',
      slugField: 'title',
      path: 'src/content/planningposts/*',
      columns: ['order', 'title'],
      format: { contentField: 'content' },
      schema: {
        ...blogSchema,
        teaserImage: fields.image({
          label: 'Bild',
          description:
            'Bild bitte im Format 2:3 (quer) hochlade bzw. wird dementsprechend beschnitten.',
          directory: 'src/assets/planningposts',
          publicPath: '/src/assets/planningposts',
          validation: { isRequired: true },
        }),
        content: fields.mdx({
          label: 'Content',
          components: {
            ImageSingleVertical: block({
              label: 'Bild: einzeln, Hochformat',
              schema: {
                src: fields.image({
                  label: 'Bild',
                  directory: 'src/assets/planningposts',
                  publicPath: '/src/assets/planningposts',
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: 'Bildunterschrift',
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: 'Alt-Text' }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: 'Breite',
                    description:
                      'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                    options: [
                      { label: 'halbe Breite', value: 'half' },
                      { label: 'ganze Breite', value: 'full' },
                    ],
                    defaultValue: 'half',
                  }),
                  {
                    half: fields.select({
                      label: 'Position',
                      options: [
                        { label: 'links', value: 'left' },
                        { label: 'zentriert', value: 'center' },
                        { label: 'rechts', value: 'right' },
                      ],
                      defaultValue: 'left',
                    }),
                    full: fields.empty(),
                  },
                ),
              },
              ContentView: contentViewImageVertical,
            }),
            ImageSingleHorizontal: block({
              label: 'Bild: einzeln, Querformat',
              schema: {
                src: fields.image({
                  label: 'Bild',
                  directory: 'src/assets/planningposts',
                  publicPath: '/src/assets/planningposts',
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: 'Bildunterschrift',
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: 'Alt-Text' }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: 'Seitenverhältnis',
                    description:
                      'Breite Formate (16:9 und 9:4) werden immer über die ganze Breite dargestellt.',
                    options: [
                      { label: '3:2', value: '3/2' },
                      { label: '4:3', value: '4/3' },
                      { label: '9:4', value: '9/4' },
                      { label: '16:9', value: 'pano' },
                    ],
                    defaultValue: '4/3',
                  }),
                  {
                    '3/2': fields.conditional(
                      fields.select({
                        label: 'Breite',
                        description:
                          'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                        options: [
                          { label: 'halbe Breite', value: 'half' },
                          { label: 'ganze Breite', value: 'full' },
                        ],
                        defaultValue: 'full',
                      }),
                      {
                        half: fields.select({
                          label: 'Position',
                          options: [
                            { label: 'links', value: 'left' },
                            { label: 'zentriert', value: 'center' },
                            { label: 'rechts', value: 'right' },
                          ],
                          defaultValue: 'left',
                        }),
                        full: fields.empty(),
                      },
                    ),
                    '4/3': fields.conditional(
                      fields.select({
                        label: 'Breite',
                        description:
                          'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                        options: [
                          { label: 'halbe Breite', value: 'half' },
                          { label: 'ganze Breite', value: 'full' },
                        ],
                        defaultValue: 'full',
                      }),
                      {
                        half: fields.select({
                          label: 'Position',
                          options: [
                            { label: 'links', value: 'left' },
                            { label: 'zentriert', value: 'center' },
                            { label: 'rechts', value: 'right' },
                          ],
                          defaultValue: 'left',
                        }),
                        full: fields.empty(),
                      },
                    ),
                    '9/4': fields.empty(),
                    pano: fields.empty(),
                  },
                ),
              },
              ContentView: contentViewImageHorizontal,
            }),
            ImageSingleSquare: block({
              label: 'Bild: einzeln, quadratisch',
              schema: {
                src: fields.image({
                  label: 'Bild',
                  directory: 'src/assets/planningposts',
                  publicPath: '/src/assets/planningposts',
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: 'Bildunterschrift',
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: 'Alt-Text' }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: 'Breite',
                    description:
                      'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                    options: [
                      { label: 'halbe Breite', value: 'half' },
                      { label: 'ganze Breite', value: 'full' },
                    ],
                    defaultValue: 'full',
                  }),
                  {
                    half: fields.select({
                      label: 'Position',
                      options: [
                        { label: 'links', value: 'left' },
                        { label: 'zentriert', value: 'center' },
                        { label: 'rechts', value: 'right' },
                      ],
                      defaultValue: 'left',
                    }),
                    full: fields.empty(),
                  },
                ),
              },
              ContentView: contentViewImageSquare,
            }),
            ImageDouble: block({
              label: 'Bild: doppelt',
              description: 'quer / hoch / quadratisch',
              schema: {
                src: fields.image({
                  label: '1. Bild',
                  directory: 'src/assets/planningposts',
                  publicPath: '/src/assets/planningposts',
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: 'Bildunterschrift',
                  validation: { length: { min: 1, max: 80 } },
                }),
                srcSecond: fields.image({
                  label: '2. Bild',
                  directory: 'src/assets/planningposts',
                  publicPath: '/src/assets/planningposts',
                  validation: { isRequired: true },
                }),
                captionSecond: fields.text({
                  label: 'Bildunterschrift',
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: 'Alt-Text' }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: 'Ausrichtung',
                    description: '',
                    options: [
                      { label: 'quer', value: 'horizontal' },
                      { label: 'hoch', value: 'vertical' },
                      { label: 'quadratisch', value: 'square' },
                    ],
                    defaultValue: 'vertical',
                  }),
                  {
                    vertical: fields.select({
                      label: 'Seitenverhältnis',
                      options: [
                        { label: '3:2', value: '3/2' },
                        { label: '4:3', value: '4/3' },
                      ],
                      defaultValue: '3/2',
                    }),
                    horizontal: fields.select({
                      label: 'Seitenverhältnis',
                      options: [
                        { label: '3:2', value: '3/2' },
                        { label: '4:3', value: '4/3' },
                      ],
                      defaultValue: '3/2',
                    }),
                    square: fields.empty(),
                  },
                ),
              },
              ContentView: contentViewImageDefaultDouble,
            }),
          },
        }),
      },
    }),
    communicationposts: collection({
      label: 'Blog Kommunikation',
      slugField: 'title',
      path: 'src/content/communicationposts/*',
      columns: ['order', 'title'],
      format: { contentField: 'content' },
      schema: {
        ...blogSchema,
        teaserImage: fields.image({
          label: 'Bild',
          description:
            'Bild bitte im Format 2:3 (quer) hochlade bzw. wird dementsprechend beschnitten.',
          directory: 'src/assets/communicationposts',
          publicPath: '/src/assets/communicationposts',
          validation: { isRequired: true },
        }),
        content: fields.mdx({
          label: 'Content',
          components: {
            ImageSingleVertical: block({
              label: 'Bild: einzeln, Hochformat',
              schema: {
                src: fields.image({
                  label: 'Bild',
                  directory: 'src/assets/communicationposts',
                  publicPath: '/src/assets/communicationposts',
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: 'Bildunterschrift',
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: 'Alt-Text' }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: 'Breite',
                    description:
                      'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                    options: [
                      { label: 'halbe Breite', value: 'half' },
                      { label: 'ganze Breite', value: 'full' },
                    ],
                    defaultValue: 'half',
                  }),
                  {
                    half: fields.select({
                      label: 'Position',
                      options: [
                        { label: 'links', value: 'left' },
                        { label: 'zentriert', value: 'center' },
                        { label: 'rechts', value: 'right' },
                      ],
                      defaultValue: 'left',
                    }),
                    full: fields.empty(),
                  },
                ),
              },
              ContentView: contentViewImageVertical,
            }),
            ImageSingleHorizontal: block({
              label: 'Bild: einzeln, Querformat',
              schema: {
                src: fields.image({
                  label: 'Bild',
                  directory: 'src/assets/communicationposts',
                  publicPath: '/src/assets/communicationposts',
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: 'Bildunterschrift',
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: 'Alt-Text' }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: 'Seitenverhältnis',
                    description:
                      'Breite Formate (16:9 und 9:4) werden immer über die ganze Breite dargestellt.',
                    options: [
                      { label: '3:2', value: '3/2' },
                      { label: '4:3', value: '4/3' },
                      { label: '9:4', value: '9/4' },
                      { label: '16:9', value: 'pano' },
                    ],
                    defaultValue: '4/3',
                  }),
                  {
                    '3/2': fields.conditional(
                      fields.select({
                        label: 'Breite',
                        description:
                          'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                        options: [
                          { label: 'halbe Breite', value: 'half' },
                          { label: 'ganze Breite', value: 'full' },
                        ],
                        defaultValue: 'full',
                      }),
                      {
                        half: fields.select({
                          label: 'Position',
                          options: [
                            { label: 'links', value: 'left' },
                            { label: 'zentriert', value: 'center' },
                            { label: 'rechts', value: 'right' },
                          ],
                          defaultValue: 'left',
                        }),
                        full: fields.empty(),
                      },
                    ),
                    '4/3': fields.conditional(
                      fields.select({
                        label: 'Breite',
                        description:
                          'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                        options: [
                          { label: 'halbe Breite', value: 'half' },
                          { label: 'ganze Breite', value: 'full' },
                        ],
                        defaultValue: 'full',
                      }),
                      {
                        half: fields.select({
                          label: 'Position',
                          options: [
                            { label: 'links', value: 'left' },
                            { label: 'zentriert', value: 'center' },
                            { label: 'rechts', value: 'right' },
                          ],
                          defaultValue: 'left',
                        }),
                        full: fields.empty(),
                      },
                    ),
                    '9/4': fields.empty(),
                    pano: fields.empty(),
                  },
                ),
              },
              ContentView: contentViewImageHorizontal,
            }),
            ImageSingleSquare: block({
              label: 'Bild: einzeln, quadratisch',
              schema: {
                src: fields.image({
                  label: 'Bild',
                  directory: 'src/assets/communicationposts',
                  publicPath: '/src/assets/communicationposts',
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: 'Bildunterschrift',
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: 'Alt-Text' }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: 'Breite',
                    description:
                      'Wieviel Platz soll das Bild im Verhältnis zur Breite des ganzen Textblocks einnehmen? Auf mobilen Screens wird immer die ganze Breite genommen.',
                    options: [
                      { label: 'halbe Breite', value: 'half' },
                      { label: 'ganze Breite', value: 'full' },
                    ],
                    defaultValue: 'full',
                  }),
                  {
                    half: fields.select({
                      label: 'Position',
                      options: [
                        { label: 'links', value: 'left' },
                        { label: 'zentriert', value: 'center' },
                        { label: 'rechts', value: 'right' },
                      ],
                      defaultValue: 'left',
                    }),
                    full: fields.empty(),
                  },
                ),
              },
              ContentView: contentViewImageSquare,
            }),
            ImageDouble: block({
              label: 'Bild: doppelt',
              description: 'quer / hoch / quadratisch',
              schema: {
                src: fields.image({
                  label: '1. Bild',
                  directory: 'src/assets/communicationposts',
                  publicPath: '/src/assets/communicationposts',
                  validation: { isRequired: true },
                }),
                caption: fields.text({
                  label: 'Bildunterschrift',
                  validation: { length: { min: 1, max: 80 } },
                }),
                srcSecond: fields.image({
                  label: '2. Bild',
                  directory: 'src/assets/communicationposts',
                  publicPath: '/src/assets/communicationposts',
                  validation: { isRequired: true },
                }),
                captionSecond: fields.text({
                  label: 'Bildunterschrift',
                  validation: { length: { min: 1, max: 80 } },
                }),
                alt: fields.text({ label: 'Alt-Text' }),
                imageConfig: fields.conditional(
                  fields.select({
                    label: 'Ausrichtung',
                    description: '',
                    options: [
                      { label: 'quer', value: 'horizontal' },
                      { label: 'hoch', value: 'vertical' },
                      { label: 'quadratisch', value: 'square' },
                    ],
                    defaultValue: 'vertical',
                  }),
                  {
                    vertical: fields.select({
                      label: 'Seitenverhältnis',
                      options: [
                        { label: '3:2', value: '3/2' },
                        { label: '4:3', value: '4/3' },
                      ],
                      defaultValue: '3/2',
                    }),
                    horizontal: fields.select({
                      label: 'Seitenverhältnis',
                      options: [
                        { label: '3:2', value: '3/2' },
                        { label: '4:3', value: '4/3' },
                      ],
                      defaultValue: '3/2',
                    }),
                    square: fields.empty(),
                  },
                ),
              },
              ContentView: contentViewImageDefaultDouble,
            }),
          },
        }),
      },
    }),
  },
})

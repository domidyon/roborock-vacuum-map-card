# Translating

The card has two dictionaries:

| File | What it covers | Language used |
|---|---|---|
| [`src/i18n/index.ts`](../src/i18n/index.ts) | The card itself: job sheet, dock panel, messages | The card's `language` setting |
| [`src/i18n/editor.ts`](../src/i18n/editor.ts) | The editor, setup assistant, Re-detect, preset scripts | The Home Assistant user's language |

## Adding a language

1. In both files, copy the `en` dictionary, give it your language code (for example `de`)
   and translate every value. Keep `{placeholders}` exactly as they are.
2. Register the language: add it to the `Language` type in `src/types.ts`, to `language`
   in the schema in `src/config.ts`, to the dictionaries map in each i18n file, and to the
   *Card language* list in `src/components/editor/BasicsSection.tsx`.
3. Optional: add option labels (suction, water flow, routes) to `optionLabels` in
   `src/i18n/index.ts`.
4. Run `npm run verify`. TypeScript refuses missing keys, and a test checks that every
   string exists and keeps its placeholders.

## Improving a translation

Polish and Turkish strings added after 0.8 were machine-assisted and would benefit from
a native speaker's review. Pull requests against the `beta` branch are welcome.

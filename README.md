# Panda CSS size test

This is a repo to test the file size of the Panda CSS runtime helper functions and the output CSS file.

## Installation

```bash
pnpm i
```

## Build

It will print the file size of the bundled `css` and `sva` functions, and the size of the output CSS file.

```bash
pnpm build
```

## File size

### Default setup

| File                                                                                                    | Size (Minified + Gzipped)                 |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| dist/styled-system/css/css.js                                                                           | 4.9KiB                                    |
| dist/styled-system/css/sva.js                                                                           | 5.8KiB                                    |
| dist/styled-system/styles.css (with [hash](https://panda-css.com/docs/references/config#hash) disabled) | 14.9KiB -> 3.8KiB (compression rate: 74%) |
| dist/styled-system/styles.css (with [hash](https://panda-css.com/docs/references/config#hash) enabled)  | 11.5KiB -> 5.0KiB (compression rate: 56%) |

> Note: `sva` is the largest file because it imports all other helper functions (`css`, `cva`, and `cx`).

### Minimal setup

> You can enable the [minimal setup](https://panda-css.com/docs/guides/minimal-setup) in `panda.config.mjs` to test the file size of the minimal setup.

| File                                                                                                    | Size (Minified + Gzipped) |
| ------------------------------------------------------------------------------------------------------- | ------------------------- |
| dist/styled-system/css/css.js                                                                           | 1.6KiB                    |
| dist/styled-system/css/sva.js                                                                           | 2.5KiB                    |
| dist/styled-system/styles.css (with [hash](https://panda-css.com/docs/references/config#hash) disabled) | 0.2KiB                    |

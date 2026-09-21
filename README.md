# lembos.dev

The Lembos website: a static Next.js site, exported and published to GitHub
Pages by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

```shell
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # static export into dist/
```

## Layout

| Path                 | What it is                                                       |
|----------------------|------------------------------------------------------------------|
| `app/page.tsx`       | The landing page, section by section                             |
| `app/layout.tsx`     | Fonts, metadata and the theme provider                           |
| `components/site/`   | The site's own components — header, footer, figures, primitives  |
| `components/ui/`     | shadcn/ui primitives                                             |
| `lib/site.ts`        | Name, links and navigation, in one place so every surface agrees |
| `public/portal/`     | Portal screenshots, in light and dark pairs                      |
| `tools/og-image.tsx` | The source of `public/og-image.png` — see the note in the file   |

## Theme

The palette is the Portal's, copied value for value from
`src/Lembos.Components/Services/LembosTheme.cs` in the platform repository and
converted to the HSL triplets the components here expect. Changing a colour
means changing it there first, then mirroring it in `app/globals.css`.

## Adding documentation

Pages added under `app/` pick up the chrome by rendering `<SiteHeader />` and
`<SiteFooter />`, and join the navigation by being added to `nav` in
`lib/site.ts`. Nothing else is landing-page specific.

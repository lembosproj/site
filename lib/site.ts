/**
 * One description of the site, so the header, the footer, the metadata and any
 * page added later all agree. Docs pages are expected to join `nav` here rather
 * than growing a second navigation of their own.
 */
export const site = {
  name: "Lembos",
  domain: "lembos.dev",
  url: "https://lembos.dev",
  tagline: "The control plane for how software is deployed, configured and governed.",
  description:
    "Lembos is an open-source internal developer platform built on versioned building blocks. It records what should be running, observes what is, and closes the gap.",
  repo: "https://github.com/lembosproj/platform",
  org: "https://github.com/lembosproj",
  email: "info@lembos.dev",
  license: "Apache 2.0",
} as const

/** Section links on the landing page. `/docs` joins this list when it exists. */
export const nav = [
  { href: "/#what-it-is", label: "What it is" },
  { href: "/#model", label: "The model" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#how-it-is-used", label: "How it is used" },
] as const

export const docsLinks = [
  { href: `${site.repo}/blob/main/docs/features.md`, label: "What Lembos does" },
  { href: `${site.repo}/tree/main/docs/domain`, label: "Domain model" },
  { href: `${site.repo}/tree/main/docs/architecture-decisions`, label: "Decision records" },
  { href: `${site.repo}/tree/main/leps`, label: "Enhancement proposals" },
] as const

export const projectLinks = [
  { href: `${site.repo}/blob/main/CONTRIBUTING.md`, label: "Contributing" },
  { href: `${site.repo}/blob/main/CODE-OF-CONDUCT.md`, label: "Code of conduct" },
  { href: `${site.repo}/blob/main/CLA.md`, label: "Contributor licence agreement" },
  { href: `${site.repo}/blob/main/LICENSE`, label: "Apache 2.0 licence" },
] as const

import type { MetadataRoute } from "next"

import { site } from "@/lib/site"

/* A static export has no request to generate this on. */
export const dynamic = "force-static"

/* One page for now. Docs routes join this list as they are added. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}

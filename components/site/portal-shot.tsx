import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * A Portal screenshot in a window frame.
 *
 * Where both a light and a dark capture exist they are swapped with CSS rather
 * than by reading the theme in JavaScript — a static export has no theme on the
 * server, so anything conditional in React renders the wrong one first and
 * flashes.
 */
export function PortalShot({
  src,
  srcDark,
  alt,
  caption,
  priority = false,
  className,
}: {
  src: string
  srcDark?: string
  alt: string
  caption?: string
  priority?: boolean
  className?: string
}) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="overflow-hidden rounded-xl border bg-card shadow-2xl shadow-foreground/5">
        <div className="flex h-9 items-center gap-1.5 border-b bg-background-gray px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="ml-3 truncate font-mono text-[11px] text-muted-foreground">
            portal.lembos.dev
          </span>
        </div>

        <Image
          src={src}
          alt={alt}
          width={1580}
          height={899}
          priority={priority}
          className={cn("w-full", srcDark && "dark:hidden")}
        />
        {srcDark ? (
          <Image
            src={srcDark}
            alt={alt}
            width={1580}
            height={899}
            priority={priority}
            className="hidden w-full dark:block"
          />
        ) : null}
      </div>

      {caption ? (
        <figcaption className="mt-3 text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

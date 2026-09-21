import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Pill } from "@/components/site/primitives"

/**
 * The shared status machine, and one blueprint's versions sitting on it.
 *
 * Built in markup rather than captured from the Portal so it themes with the
 * page and stays legible on a phone. The versions are the ones the Northwind
 * sample data seeds.
 */
export function VersionLadder() {
  const rows = [
    {
      version: "2.5.0-rc.1",
      status: "Draft" as const,
      tone: "muted" as const,
      availability: "Unknown",
    },
    {
      version: "2.4.0",
      status: "Published" as const,
      tone: "success" as const,
      availability: "Available",
      current: true,
    },
    {
      version: "2.3.0",
      status: "Withdrawn" as const,
      tone: "destructive" as const,
      availability: "NotFound",
    },
    {
      version: "2.2.0",
      status: "Deprecated" as const,
      tone: "warning" as const,
      availability: "Available",
    },
  ]

  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b px-5 py-4">
        <p className="font-mono text-sm">platform/helm-web-service</p>
        <p className="text-xs text-muted-foreground">Blueprint &middot; Helm</p>
      </div>

      <ul className="divide-y">
        {rows.map((row) => (
          <li
            key={row.version}
            className="flex items-center gap-x-3 px-5 py-3.5 sm:gap-x-4"
          >
            <span className="flex min-w-[7rem] items-center gap-2 font-mono text-sm sm:min-w-[8.5rem]">
              {row.version}
              {row.current ? (
                <span className="rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                  current
                </span>
              ) : null}
            </span>
            <Pill tone={row.tone}>{row.status}</Pill>
            <span className="ml-auto hidden text-xs text-muted-foreground sm:block">
              {row.availability}
            </span>
          </li>
        ))}
      </ul>

      <p className="border-t bg-background-gray px-5 py-3 font-mono text-xs leading-relaxed text-muted-foreground">
        pinned digest bd0c1a09b788bca1e93c18ae5b04aa86cdceb202
      </p>
    </div>
  )
}

/**
 * Desired against observed, and the gap between them.
 *
 * The point of the figure is that the right column is not a log of the left —
 * it is reported by the target, and the difference is the work.
 */
export function ConvergeFigure() {
  const desired = [
    ["artifact", "cart-service@sha256:9f2c…"],
    ["blueprint", "helm-web-service 2.4.0"],
    ["config", "revision 17"],
    ["replicas", "6"],
  ]

  const observed = [
    ["artifact", "cart-service@sha256:9f2c…", true],
    ["blueprint", "helm-web-service 2.2.0", false],
    ["config", "revision 15", false],
    ["replicas", "6", true],
  ] as const

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
      <div className="rounded-xl border bg-card">
        <div className="border-b px-5 py-3">
          <p className="text-sm font-medium">Desired state</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            What was declared and published
          </p>
        </div>
        <dl className="divide-y">
          {desired.map(([key, value]) => (
            <div
              key={key}
              className="flex items-baseline justify-between gap-4 px-5 py-2.5"
            >
              <dt className="font-mono text-xs text-muted-foreground">{key}</dt>
              <dd className="truncate font-mono text-xs">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex items-center justify-center gap-2 md:flex-col">
        <span className="h-px w-8 bg-border md:h-8 md:w-px" />
        <span className="whitespace-nowrap rounded-full border border-warning/40 bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
          drift
        </span>
        <span className="h-px w-8 bg-border md:h-8 md:w-px" />
      </div>

      <div className="rounded-xl border bg-card">
        <div className="border-b px-5 py-3">
          <p className="text-sm font-medium">Observed state</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            What the execution target reports
          </p>
        </div>
        <dl className="divide-y">
          {observed.map(([key, value, matches]) => (
            <div
              key={key}
              className="flex items-baseline justify-between gap-4 px-5 py-2.5"
            >
              <dt className="font-mono text-xs text-muted-foreground">{key}</dt>
              <dd
                className={cn(
                  "truncate font-mono text-xs",
                  matches ? "text-muted-foreground" : "text-warning",
                )}
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

/** Permission, ownership, policy — three questions, three mechanisms. */
export function AuthorizationLayers() {
  const layers = [
    {
      name: "Permission",
      question: "May this principal do this class of thing?",
      how: "Flat RBAC, carried as claims. Cheap, and invertible — “who may deploy” is a role query.",
    },
    {
      name: "Ownership",
      question: "Do they reach this particular entity?",
      how: "Group membership, inherited down the hierarchy, so a member of a parent group reaches what its children own.",
    },
    {
      name: "Policy",
      question: "Is this specific intent allowed right now?",
      how: "Conditions on facts, evaluated at the moment of the request against a pinned policy version.",
    },
  ]

  return (
    <ol className="space-y-px overflow-hidden rounded-xl border bg-card">
      {layers.map((layer, index) => (
        <li
          key={layer.name}
          className={cn(
            "grid gap-2 px-5 py-5 sm:grid-cols-[auto_1fr] sm:gap-6",
            index > 0 && "border-t",
          )}
        >
          <span className="font-mono text-xs text-muted-foreground sm:pt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="font-medium">{layer.name}</p>
            <p className="mt-1 text-sm text-foreground/80">{layer.question}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {layer.how}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

/** Work routes to targets that can actually run it. */
export function RoutingFigure() {
  const targets = [
    {
      name: "platform/aws-production",
      capabilities: ["hardened-runtime", "backup-enabled", "pci-dss"],
      accepts: true,
    },
    {
      name: "platform/aws-nonproduction",
      capabilities: [],
      accepts: false,
    },
  ]

  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="flex flex-wrap items-center gap-2 border-b px-5 py-4 text-xs text-muted-foreground">
        <span className="font-mono text-foreground">checkout/cart-service</span>
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        <span>requires</span>
        <Pill tone="primary">pci-dss</Pill>
      </div>

      <ul className="divide-y">
        {targets.map((target) => (
          <li key={target.name} className="px-5 py-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-sm">{target.name}</p>
              <span
                className={cn(
                  "text-xs font-medium",
                  target.accepts ? "text-success" : "text-muted-foreground",
                )}
              >
                {target.accepts ? "eligible" : "not eligible"}
              </span>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {target.capabilities.length > 0 ? (
                target.capabilities.map((capability) => (
                  <Pill
                    key={capability}
                    tone={capability === "pci-dss" ? "primary" : "muted"}
                  >
                    {capability}
                  </Pill>
                ))
              ) : (
                <Pill tone="muted">no capabilities declared</Pill>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

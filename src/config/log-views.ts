/**
 * The three log routes (/timeline, /projects, /blog) are the same sheet with a
 * different slice of the same data. Their config lives here so the routes stay
 * four lines each and nothing drifts between them.
 */

export type LogViewId = "timeline" | "projects" | "blog";

/** Category key understood by the timeline's build-time filter. */
export type LogFilter = "all" | "work" | "blog" | "education" | "project";

export interface LogView {
  readonly filter: LogFilter;
  readonly title: string;
  readonly description: string;
  readonly heading: string;
  readonly strap: string;
  readonly sheetId: string;
  readonly fig: string;
  /** Rail item to mark as the current page. */
  readonly current: string;
}

export const LOG_VIEWS: Readonly<Record<LogViewId, LogView>> = {
  timeline: {
    filter: "all",
    title: "Timeline — Pavittar Singh",
    description:
      "A chronological record of Pavittar Singh's engineering work, writing and releases from 2018 to today.",
    heading: "Mission Log",
    strap: "// Chronological record of operations and deployments",
    sheetId: "Pavittarx // Mission Log",
    fig: "Fig. 02",
    current: "Timeline",
  },
  projects: {
    filter: "project",
    title: "Projects — Pavittar Singh",
    description:
      "Open-source projects and shipped work by Pavittar Singh, including editorjs-html, mechadealer, btxr and Conway's Game of Life.",
    heading: "Projects",
    strap: "// Things shipped, open sourced and still running",
    sheetId: "Pavittarx // Build Log",
    fig: "Fig. 04",
    current: "Projects",
  },
  blog: {
    filter: "blog",
    title: "Writing — Pavittar Singh",
    description:
      "Notes by Pavittar Singh on distributed systems, scaling, unique IDs, consistent hashing and location-based services.",
    heading: "Lab Notes",
    strap: "// Writing on systems, scale and the tooling around them",
    sheetId: "Pavittarx // Lab Notes",
    fig: "Fig. 05",
    current: "Blog",
  },
} as const;

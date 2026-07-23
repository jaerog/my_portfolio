export type Sidebar = "explorer" | "search" | "git" | "extensions";

export type BottomPanel = "terminal" | "problems" | "output" | "debug";

export type Theme =
  "dark-plus" | "github-dark" | "dracula" | "tokyo-night" | "catppuccin";

export interface ExplorerFile {
  id: string;
  name: string;
  extension: "tsx" | "md";
  path: string;
  code: string;
  preview: React.ReactNode;
}

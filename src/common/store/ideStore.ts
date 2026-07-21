import { create } from "zustand";

type SidebarType = "explorer" | "search" | "git" | "extensions";

type BottomPanelType = "terminal" | "problems" | "output";

interface IDEStore {
  activeSidebar: SidebarType;
  activePanel: BottomPanelType;

  setSidebar: (sidebar: SidebarType) => void;
  setPanel: (panel: BottomPanelType) => void;
}

export const useIDEStore = create<IDEStore>((set) => ({
  activeSidebar: "explorer",
  activePanel: "terminal",

  setSidebar: (sidebar) => set({ activeSidebar: sidebar }),

  setPanel: (panel) => set({ activePanel: panel }),
}));

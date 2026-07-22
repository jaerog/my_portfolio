import { create } from "zustand";

import type { BottomPanel, Sidebar, Theme } from "../types/ide";

interface IDEStore {
  bootComplete: boolean;

  activeSidebar: Sidebar;
  activeBottomPanel: BottomPanel;

  activeFile: string;

  openFiles: string[];

  collapsedPanels: {
    explorer: boolean;
    terminal: boolean;
  };

  sourceControlVisible: boolean;

  theme: Theme;

  terminalHistory: string[];

  terminalOutput: string[];

  setBootComplete: (value: boolean) => void;

  setSidebar: (sidebar: Sidebar) => void;

  setBottomPanel: (panel: BottomPanel) => void;

  openFile: (id: string) => void;

  closeFile: (id: string) => void;

  expandedFolders: Record<string, boolean>;

  togglePanel: (panel: "explorer" | "terminal") => void;

  toggleFolder: (id: string) => void;
  setTheme: (theme: Theme) => void;

  addTerminalOutput: (line: string) => void;

  clearTerminal: () => void;
}

export const useIDEStore = create<IDEStore>((set) => ({
  bootComplete: false,

  activeSidebar: "explorer",

  activeBottomPanel: "terminal",

  activeFile: "hero",

  openFiles: ["hero"],

  expandedFolders: {
    src: true,
  },

  collapsedPanels: {
    explorer: false,
    terminal: false,
  },

  sourceControlVisible: false,

  theme: "dark-plus",

  terminalHistory: [],

  terminalOutput: [],

  setBootComplete: (value) => set({ bootComplete: value }),

  setSidebar: (sidebar) => set({ activeSidebar: sidebar }),

  setBottomPanel: (panel) => set({ activeBottomPanel: panel }),

  openFile: (id) =>
    set((state) => ({
      activeFile: id,
      openFiles: state.openFiles.includes(id)
        ? state.openFiles
        : [...state.openFiles, id],
    })),

  closeFile: (id) =>
    set((state) => {
      const remaining = state.openFiles.filter((f) => f !== id);

      return {
        openFiles: remaining,
        activeFile:
          state.activeFile === id
            ? (remaining[remaining.length - 1] ?? "")
            : state.activeFile,
      };
    }),
  togglePanel: (panel) =>
    set((state) => ({
      collapsedPanels: {
        ...state.collapsedPanels,
        [panel]: !state.collapsedPanels[panel],
      },
    })),
  toggleFolder: (folder: string) =>
    set((state) => ({
      expandedFolders: {
        ...state.expandedFolders,
        [folder]: !state.expandedFolders[folder],
      },
    })),

  setTheme: (theme) => set({ theme }),

  addTerminalOutput: (line) =>
    set((state) => ({
      terminalOutput: [...state.terminalOutput, line],
    })),

  clearTerminal: () =>
    set({
      terminalOutput: [],
    }),
}));

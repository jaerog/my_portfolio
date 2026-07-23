import { create } from "zustand";

import type { BottomPanel, Sidebar, Theme } from "../types/ide";

interface IDEStore {
  bootComplete: boolean;

  activeSidebar: Sidebar;
  activeBottomPanel: BottomPanel;

  activeFile: string;
  openFiles: string[];

  expandedFolders: Record<string, boolean>;

  collapsedPanels: {
    sidebar: boolean;
    terminal: boolean;
    preview: boolean;
  };

  theme: Theme;

  terminalHistory: string[];
  terminalOutput: string[];

  setBootComplete: (value: boolean) => void;

  setSidebar: (sidebar: Sidebar) => void;

  toggleSidebar: () => void;

  setBottomPanel: (panel: BottomPanel) => void;

  toggleTerminal: () => void;

  togglePreview: () => void;

  openFile: (id: string) => void;

  closeFile: (id: string) => void;

  toggleFolder: (folder: string) => void;

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
    sidebar: false,
    terminal: false,
    preview: false,
  },

  theme: "dark-plus",

  terminalHistory: [],

  terminalOutput: [],

  setBootComplete: (value) =>
    set({
      bootComplete: value,
    }),

  setSidebar: (sidebar) =>
    set((state) => {
      // Clicking the already-open sidebar collapses it
      if (state.activeSidebar === sidebar && !state.collapsedPanels.sidebar) {
        return {
          collapsedPanels: {
            ...state.collapsedPanels,
            sidebar: true,
          },
        };
      }

      return {
        activeSidebar: sidebar,
        collapsedPanels: {
          ...state.collapsedPanels,
          sidebar: false,
        },
      };
    }),

  toggleSidebar: () =>
    set((state) => ({
      collapsedPanels: {
        ...state.collapsedPanels,
        sidebar: !state.collapsedPanels.sidebar,
      },
    })),

  setBottomPanel: (panel) =>
    set({
      activeBottomPanel: panel,
      collapsedPanels: {
        terminal: false,
        sidebar: false,
        preview: false,
      },
    }),

  toggleTerminal: () =>
    set((state) => ({
      collapsedPanels: {
        ...state.collapsedPanels,
        terminal: !state.collapsedPanels.terminal,
      },
    })),

  togglePreview: () =>
    set((state) => ({
      collapsedPanels: {
        ...state.collapsedPanels,
        preview: !state.collapsedPanels.preview,
      },
    })),

  openFile: (id) =>
    set((state) => ({
      activeFile: id,
      openFiles: state.openFiles.includes(id)
        ? state.openFiles
        : [...state.openFiles, id],
    })),

  closeFile: (id) =>
    set((state) => {
      const remaining = state.openFiles.filter((file) => file !== id);

      return {
        openFiles: remaining,
        activeFile:
          state.activeFile === id
            ? (remaining[remaining.length - 1] ?? "")
            : state.activeFile,
      };
    }),

  toggleFolder: (folder) =>
    set((state) => ({
      expandedFolders: {
        ...state.expandedFolders,
        [folder]: !state.expandedFolders[folder],
      },
    })),

  setTheme: (theme) =>
    set({
      theme,
    }),

  addTerminalOutput: (line) =>
    set((state) => ({
      terminalOutput: [...state.terminalOutput, line],
    })),

  clearTerminal: () =>
    set({
      terminalOutput: [],
    }),
}));

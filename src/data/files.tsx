import Hero from "../features/portfolio/components/Hero/Hero";
import About from "../features/portfolio/components/About/About";
import type { ComponentType } from "react";
import { heroCode } from "../features/portfolio/components/Hero/HeroCode";
import { aboutCode } from "../features/portfolio/components/About/aboutCode";

export type FileData = {
  id: string;
  name: string;
  extension: "tsx" | "ts" | "css" | "json" | "md";
  path: string;
  code: string;
  component: ComponentType;
};

export const files: FileData[] = [
  {
    id: "hero",

    name: "Hero.tsx",

    extension: "tsx",

    path: "src/Hero.tsx",

    code: heroCode,

    component: Hero,
  },

  {
    id: "about",

    name: "About.tsx",

    extension: "tsx",

    path: "src/About.tsx",

    code: aboutCode,

    component: About,
  },
];

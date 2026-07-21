import Hero from "../features/portfolio/components/Hero";
import About from "../features/portfolio/components/About";

export const files = [
  {
    id: "hero",

    name: "Hero.tsx",

    extension: "tsx",

    path: "src/Hero.tsx",

    code: `export default function Hero() {

    return (

        <section>

            <h1>Jaelyn Rogers</h1>

        </section>

    );

}`,

    preview: <Hero />,
  },

  {
    id: "about",

    name: "About.tsx",

    extension: "tsx",

    path: "src/About.tsx",

    code: `export default function About() {

    return (

        <section>

            <h1>About Me</h1>

        </section>

    );

}`,

    preview: <About />,
  },
];

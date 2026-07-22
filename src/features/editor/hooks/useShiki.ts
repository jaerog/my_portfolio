import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

import { shikiThemes } from "../../../common/themes";
import { useIDEStore } from "../../../common/store/ideStore";

export const useShiki = (code: string) => {
  const theme = useIDEStore((state) => state.theme);

  const [html, setHtml] = useState("");

  useEffect(() => {
    const highlight = async () => {
      const result = await codeToHtml(code, {
        lang: "tsx",
        theme: shikiThemes[theme],
      });

      setHtml(result);
    };

    highlight();
  }, [code, theme]);

  return html;
};

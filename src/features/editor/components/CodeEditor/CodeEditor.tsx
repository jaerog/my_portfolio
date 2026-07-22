import "./codeEditor.css";

import { useShiki } from "../../hooks/useShiki";

interface Props {
  code: string;
}

const CodeEditor = ({ code }: Props) => {
  const html = useShiki(code);

  return (
    <div className="code-editor">
      <div
        className="shiki-wrapper"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
};

export default CodeEditor;

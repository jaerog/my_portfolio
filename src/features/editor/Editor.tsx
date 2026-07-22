import "./styles/editor.css"; //TODO: fix duplicate editor.css

import { files } from "../../data/files";
import { useIDEStore } from "../../common/store/ideStore";

import EditorTabs from "./components/EditorTabs";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import LineNumbers from "./components/LineNumbers/LineNumbers";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import PanelContainer from "../../common/components/PanelContainer/PanelContainer";
// import Minimap from "./components/Minimap/Minimap";

const Editor = () => {
  const activeFile = useIDEStore((s) => s.activeFile);

  const file = files.find((f) => f.id === activeFile);

  if (!file) return null;

  return (
    <PanelContainer className="editor">
      <EditorTabs />

      <Breadcrumb file={file} />

      <div className="editor-body">
        <LineNumbers code={file.code} />

        <CodeEditor code={file.code} />

        {/* <Minimap code={file.code} /> */}
      </div>
    </PanelContainer>
  );
};

export default Editor;

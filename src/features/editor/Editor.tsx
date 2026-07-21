import { files } from "../../data/files";
import { useIDEStore } from "../../common/store/ideStore";

const Editor = () => {
  const activeFile = useIDEStore((s) => s.activeFile);

  const file = files.find((f) => f.id === activeFile);

  if (!file) return null;

  return (
    <div className="editor">
      <pre>{file.code}</pre>
    </div>
  );
};

export default Editor;

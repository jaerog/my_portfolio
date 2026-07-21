import { files } from "../../data/files";
import { useIDEStore } from "../../common/store/ideStore";

const Preview = () => {
  const activeFile = useIDEStore((s) => s.activeFile);

  const file = files.find((f) => f.id === activeFile);

  if (!file) return null;

  return <div className="preview">{file.preview}</div>;
};

export default Preview;

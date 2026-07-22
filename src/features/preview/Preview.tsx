import { files } from "../../data/files";
import { useIDEStore } from "../../common/store/ideStore";

const Preview = () => {
  const activeFile = useIDEStore((s) => s.activeFile);

  const file = files.find((f) => f.id === activeFile);

  if (!file) return null;
  const Component = file.component;

  return (
    <div className="preview">
      <Component />
    </div>
  );
};

export default Preview;

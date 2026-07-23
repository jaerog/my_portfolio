import { files } from "../../../../data/files";
import { useIDEStore } from "../../../../common/store/ideStore";

const BrowserView = () => {
  const activeFile = useIDEStore((s) => s.activeFile);

  const file = files.find((f) => f.id === activeFile);

  if (!file) return null;

  const Component = file.component;

  return (
    <div className="browser-view">
      <Component />
    </div>
  );
};

export default BrowserView;

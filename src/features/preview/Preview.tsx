import { files } from "../../data/files";
import { useIDEStore } from "../../common/store/ideStore";
import PanelContainer from "../../common/components/PanelContainer/PanelContainer";
import "./Preview.css";

const Preview = () => {
  const activeFile = useIDEStore((s) => s.activeFile);

  const file = files.find((f) => f.id === activeFile);

  if (!file) return null;
  const Component = file.component;

  return (
    <PanelContainer className="preview">
      <Component />
    </PanelContainer>
  );
};

export default Preview;

import { useMemo } from "react";
import { files } from "../../data/files";
import { buildTree } from "./utils/buildTree";
import "./Explorer.css";
import { ExplorerHeader } from "./components/ExplorerHeader";
import { Tree } from "./components/Tree";
import PanelContainer from "../../common/components/PanelContainer/PanelContainer";

const Explorer = () => {
  const tree = useMemo(() => buildTree(files), []);

  return (
    <PanelContainer className="explorer">
      <ExplorerHeader />

      <Tree nodes={tree} />
    </PanelContainer>
  );
};

export default Explorer;

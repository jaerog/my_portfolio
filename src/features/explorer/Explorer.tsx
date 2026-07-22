import { useMemo } from "react";
import { files } from "../../data/files";
import { buildTree } from "./utils/buildTree";
import "./Explorer.css";
import { ExplorerHeader } from "./components/ExplorerHeader";
import { Tree } from "./components/Tree";

const Explorer = () => {
  const tree = useMemo(() => buildTree(files), []);

  return (
    <div className="explorer">
      <ExplorerHeader />

      <Tree nodes={tree} />
    </div>
  );
};

export default Explorer;

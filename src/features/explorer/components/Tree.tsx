import type { TreeNodeData } from "../../../common/types/explorer";
import { TreeNode } from "./TreeNode";
import "../Explorer.css";

type TreeProps = {
  nodes: TreeNodeData[];
};

export const Tree = ({ nodes }: TreeProps) => {
  return (
    <div className="explorer-tree">
      {nodes.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

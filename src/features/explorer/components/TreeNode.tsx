import { DescriptionOutlined, ChevronRight } from "@mui/icons-material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import clsx from "clsx";
import { useIDEStore } from "../../../common/store/ideStore";
import type { TreeNodeData } from "../../../common/types/explorer";
import "../Explorer.css";

type TreeNodeProps = {
  node: TreeNodeData;
  depth?: number;
};

const INDENT_SIZE = 12;

export const TreeNode = ({ node, depth = 0 }: TreeNodeProps) => {
  const openFile = useIDEStore((s) => s.openFile);
  const activeFile = useIDEStore((s) => s.activeFile);

  const expanded = useIDEStore((s) => s.expandedFolders[node.id] ?? true);

  const toggleFolder = useIDEStore((s) => s.toggleFolder);

  const isFolder = node.type === "folder";
  const isActive = activeFile === node.fileId;

  const handleClick = () => {
    if (isFolder) {
      toggleFolder(node.id);
      return;
    }

    if (node.fileId) {
      openFile(node.fileId);
    }
  };

  return (
    <>
      <div
        className={clsx("node-row", {
          folder: isFolder,
          file: !isFolder,
          active: isActive,
        })}
        onClick={handleClick}
      >
        <span
          className="tree-indent"
          style={{
            width: depth * INDENT_SIZE,
          }}
        />

        {isFolder ? (
          <ChevronRight
            className={clsx("tree-chevron", {
              open: expanded,
            })}
          />
        ) : (
          <span className="tree-chevron-placeholder" />
        )}

        {isFolder ? (
          expanded ? (
            <FolderOpenOutlinedIcon className="tree-icon" />
          ) : (
            <FolderOutlinedIcon className="tree-icon" />
          )
        ) : (
          <DescriptionOutlined className="tree-icon" />
        )}

        <span className="node-name">{node.name}</span>
      </div>

      {isFolder && expanded && node.children && (
        <div className="children">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </>
  );
};

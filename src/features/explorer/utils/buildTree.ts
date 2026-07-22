import type { TreeNodeData } from "../../../common/types/explorer";
import type { FileData } from "../../../data/files";

export const buildTree = (files: FileData[]): TreeNodeData[] => {
  const root: TreeNodeData = {
    id: "",
    name: "",
    type: "folder",
    children: [],
  };

  for (const file of files) {
    const parts = file.path.split("/");
    let current = root;
    let currentPath = "";

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1;

      currentPath = currentPath ? `${currentPath}/${part}` : part;

      let child = current.children?.find(
        (c) => c.name === part && c.type === (isFile ? "file" : "folder"),
      );

      if (!child) {
        child = {
          id: currentPath,
          name: part,
          type: isFile ? "file" : "folder",
          children: isFile ? undefined : [],
          fileId: isFile ? file.id : undefined,
          extension: isFile ? file.extension : undefined,
        };

        current.children!.push(child);
      }

      if (!isFile) {
        current = child;
      }
    });
  }

  return root.children ?? [];
};

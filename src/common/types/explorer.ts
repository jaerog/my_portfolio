export type TreeNodeData = {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: TreeNodeData[];
  fileId?: string;
  extension?: string;
};

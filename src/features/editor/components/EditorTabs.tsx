import "./editorTabs.css";

import { X } from "lucide-react";

import { files } from "../../../data/files";

import { useIDEStore } from "../../../common/store/ideStore";

const EditorTabs = () => {
  const { openFiles, activeFile, openFile, closeFile } = useIDEStore();

  return (
    <div className="editor-tabs">
      {openFiles.map((id) => {
        const file = files.find((f) => f.id === id);

        if (!file) return null;

        return (
          <div
            key={id}
            className={`editor-tab ${activeFile === id ? "active" : ""}`}
            onClick={() => openFile(id)}
          >
            <span>{file.name}</span>

            <X
              size={14}
              onClick={(e) => {
                e.stopPropagation();

                closeFile(id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EditorTabs;

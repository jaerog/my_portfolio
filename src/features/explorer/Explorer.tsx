import { files } from "../../data/files";
import { useIDEStore } from "../../common/store/ideStore";

const Explorer = () => {
  const openFile = useIDEStore((s) => s.openFile);
  const active = useIDEStore((s) => s.activeFile);

  return (
    <aside className="explorer">
      <h4>EXPLORER</h4>

      {files.map((file) => (
        <div
          key={file.id}
          className={active === file.id ? "file active" : "file"}
          onClick={() => openFile(file.id)}
        >
          {file.name}
        </div>
      ))}
    </aside>
  );
};

export default Explorer;

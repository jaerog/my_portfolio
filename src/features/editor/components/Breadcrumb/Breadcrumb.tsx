import "./breadcrumb.css";

import { ChevronRight } from "lucide-react";

import type { FileData } from "../../../../data/files";

interface Props {
  file: FileData;
}

const Breadcrumb = ({ file }: Props) => {
  return (
    <div className="breadcrumb">
      <span>portfolio</span>

      <ChevronRight size={14} />

      <span>src</span>

      <ChevronRight size={14} />

      <span>{file.name}</span>
    </div>
  );
};

export default Breadcrumb;

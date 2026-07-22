import { Separator } from "react-resizable-panels";

import "./ResizeHandle.css";

type Props = {
  direction: "horizontal" | "vertical";
};

const ResizeHandle = ({ direction }: Props) => {
  return (
    <Separator className={`resize-handle ${direction}`}>
      <div className="resize-grip" />
    </Separator>
  );
};

export default ResizeHandle;

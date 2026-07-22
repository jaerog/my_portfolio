import "./PanelContainer.css";
import type { PropsWithChildren } from "react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  className?: string;
}

const PanelContainer = ({ children, className }: Props) => {
  return <div className={clsx("panel-container", className)}>{children}</div>;
};

export default PanelContainer;

import "./sidebar.css";

import Explorer from "../explorer/Explorer";

import { useIDEStore } from "../../common/store/ideStore";

const Sidebar = () => {
  const activeSidebar = useIDEStore((state) => state.activeSidebar);

  switch (activeSidebar) {
    case "explorer":
      return <Explorer />;

    case "search":
      return <div className="sidebar-placeholder">Search</div>;

    case "git":
      return <div className="sidebar-placeholder">Source Control</div>;

    case "extensions":
      return <div className="sidebar-placeholder">Extensions</div>;

    default:
      return null;
  }
};

export default Sidebar;

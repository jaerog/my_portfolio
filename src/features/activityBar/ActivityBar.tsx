import { Files, Search, GitBranch, Blocks } from "lucide-react";

import "./activityBar.css";

const ActivityBar = () => {
  return (
    <aside className="activity-bar">
      <div className="top-icons">
        <Files size={22} />
        <Search size={22} />
        <GitBranch size={22} />
        <Blocks size={22} />
        {/* <Github size={22} /> //TODO: link */}
      </div>
    </aside>
  );
};

export default ActivityBar;

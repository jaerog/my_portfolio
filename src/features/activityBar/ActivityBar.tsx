import { Files, Search, GitBranch, Blocks } from "lucide-react";

import "./activityBar.css";

import { useIDEStore } from "../../common/store/ideStore";

const items = [
  {
    id: "explorer",
    icon: Files,
  },
  {
    id: "search",
    icon: Search,
  },
  {
    id: "git",
    icon: GitBranch,
  },
  {
    id: "extensions",
    icon: Blocks,
  },
] as const;

const ActivityBar = () => {
  const activeSidebar = useIDEStore((s) => s.activeSidebar);

  const setSidebar = useIDEStore((s) => s.setSidebar);

  return (
    <aside className="activity-bar">
      <div className="top-icons">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={`activity-button ${
                activeSidebar === item.id ? "active" : ""
              }`}
              onClick={() => setSidebar(item.id)}
            >
              <Icon size={22} />
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default ActivityBar;

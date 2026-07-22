import "./titleBar.css";

import { Minus, Square, X, Search } from "lucide-react";

// import { SiVisualstudiocode } from "react-icons/si";

const menus = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

const TitleBar = () => {
  return (
    <header className="title-bar">
      <div className="title-left">
        {/* <SiVisualstudiocode className="vscode-icon" /> */}

        {menus.map((menu) => (
          <button key={menu} className="menu-button">
            {menu}
          </button>
        ))}
      </div>

      <div className="title-center">
        <div className="command-center">
          <Search size={15} />

          <span>portfolio-jaelyn-rogers</span>
        </div>
      </div>

      <div className="title-right">
        <Minus size={18} />

        <Square size={15} />

        <X size={18} />
      </div>
    </header>
  );
};

export default TitleBar;

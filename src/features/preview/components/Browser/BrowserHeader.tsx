import "./browserHeader.css";

import { ChevronLeft, ChevronRight, RotateCw, Globe } from "lucide-react";

const BrowserHeader = () => {
  return (
    <header className="browser-header">
      <div className="browser-actions">
        <button>
          <ChevronLeft size={16} />
        </button>

        <button>
          <ChevronRight size={16} />
        </button>

        <button>
          <RotateCw size={15} />
        </button>
      </div>

      <div className="browser-address">
        <Globe size={14} />

        <span>http://localhost:5173</span>
      </div>

      <div className="browser-live">
        <span className="live-dot" />
        Live
      </div>
    </header>
  );
};

export default BrowserHeader;

import "./browser.css";

import BrowserHeader from "./BrowserHeader";
import BrowserView from "./BrowserView";

const Browser = () => {
  return (
    <div className="browser">
      <BrowserHeader />

      <BrowserView />
    </div>
  );
};

export default Browser;

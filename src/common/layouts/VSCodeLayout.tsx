import ActivityBar from "../../features/activityBar/ActivityBar";
import Explorer from "../../features/explorer/Explorer";
import Editor from "../../features/editor/Editor";
import Preview from "../../features/preview/Preview";
import Terminal from "../../features/terminal/Terminal";
import StatusBar from "../../features/statusBar/StatusBar";
import "./VSCodeLayout.css";

const VSCodeLayout = () => {
  return (
    <div className="container">
      <div className="section">
        <ActivityBar />

        <Explorer />

        <div className="rightSection">
          <div className="viewsSection">
            <Editor />

            <Preview />
          </div>

          <Terminal />
        </div>
      </div>

      <StatusBar />
    </div>
  );
};

export default VSCodeLayout;

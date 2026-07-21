import ActivityBar from "../../features/activityBar/ActivityBar";
import Explorer from "../../features/explorer/Explorer";
import Editor from "../../features/editor/Editor";
import Preview from "../../features/preview/Preview";
import Terminal from "../../features/terminal/Terminal";
import StatusBar from "../../features/statusBar/StatusBar";

const VSCodeLayout = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >
        <ActivityBar />

        <Explorer />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
            }}
          >
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

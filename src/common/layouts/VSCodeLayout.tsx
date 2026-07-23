import "./VSCodeLayout.css";
import { Panel, Group } from "react-resizable-panels";
import TitleBar from "../../features/titleBar/TitleBar";
import StatusBar from "../../features/statusBar/StatusBar";
import ActivityBar from "../../features/activityBar/ActivityBar";
import Explorer from "../../features/explorer/Explorer";
import Editor from "../../features/editor/Editor";
import Preview from "../../features/preview/Preview";
import Terminal from "../../features/terminal/Terminal";
import ResizeHandle from "../components/ResizeHandle/ResizeHandle";
import { useIDEStore } from "../store/ideStore";
import Sidebar from "../../features/sidebar/Sidebar";

const VSCodeLayout = () => {
  const collapsed = useIDEStore((s) => s.collapsedPanels);

  return (
    <div className="layout">
      <TitleBar />

      <Group
        orientation="vertical"
        className="workspace"
        autoSave="workspace-layout"
      >
        <Panel defaultSize={78} minSize={35}>
          <div className="workspace-content">
            <ActivityBar />

            <Group orientation="horizontal" autoSave="main-layout">
              {!collapsed.sidebar && (
                <>
                  <Panel
                    defaultSize={200}
                    minSize={12}
                    maxSize={250}
                    collapsible
                  >
                    <Sidebar />
                  </Panel>

                  <ResizeHandle direction="horizontal" />
                </>
              )}

              <Panel minSize={40}>
                <Group orientation="vertical" autoSave="editor-stack">
                  <Panel defaultSize={75} minSize={35}>
                    <Group orientation="horizontal" autoSave="editor-layout">
                      <Panel defaultSize={100} minSize={25}>
                        <Editor />
                      </Panel>

                      <ResizeHandle direction="horizontal" />

                      <Panel defaultSize={200} minSize={20}>
                        <Preview />
                      </Panel>
                    </Group>
                  </Panel>

                  {!collapsed.terminal && (
                    <>
                      <ResizeHandle direction="vertical" />

                      <Panel
                        defaultSize={60}
                        minSize={12}
                        maxSize={200}
                        collapsible
                      >
                        <Terminal />
                      </Panel>
                    </>
                  )}
                </Group>
              </Panel>
            </Group>
          </div>
        </Panel>
      </Group>

      <StatusBar />
    </div>
  );
};

export default VSCodeLayout;

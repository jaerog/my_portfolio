const Editor = () => {
  return (
    <div
      style={{
        flex: 1,
        background: "var(--editor-bg)",
        padding: "24px",
      }}
    >
      <h2>Editor</h2>

      <pre>
        {`export const Hero = () => {
  return <div>Hello World</div>;
};`}
      </pre>
    </div>
  );
};

export default Editor;

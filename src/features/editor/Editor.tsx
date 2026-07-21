import "./Editor.css";

const Editor = () => {
  return (
    <div className="editor">
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

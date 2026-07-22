import "./minimap.css";

interface Props {
  code: string;
}

const Minimap = ({ code }: Props) => {
  const rows = code.split("\n");

  return (
    <div className="minimap">
      {rows.map((line, index) => (
        <div
          key={index}
          className="mini-line"
          style={{
            width: `${Math.max(
              10,

              line.length * 2,
            )}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Minimap;

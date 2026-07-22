import "./lineNumbers.css";

interface Props {
  code: string;
}

const LineNumbers = ({ code }: Props) => {
  const lines = code.split("\n");

  return (
    <div className="line-numbers">
      {lines.map((_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
};

export default LineNumbers;

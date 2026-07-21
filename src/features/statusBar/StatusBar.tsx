const StatusBar = () => {
  return (
    <footer
      style={{
        height: "24px",
        background: "var(--status-bg)",
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        fontSize: "12px",
      }}
    >
      main • TypeScript • UTF-8
    </footer>
  );
};

export default StatusBar;

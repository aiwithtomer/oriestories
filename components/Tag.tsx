export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-block",
      backgroundColor: "#F5EDE0",
      color: "#2D4A3E",
      fontSize: "0.75rem",
      fontWeight: 600,
      padding: "0.25rem 0.75rem",
      borderRadius: "9999px",
      border: "1px solid #E8D5A8",
    }}>
      {children}
    </span>
  );
}

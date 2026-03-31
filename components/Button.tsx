import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

const styles = {
  primary: {
    backgroundColor: "#C8A96E",
    color: "#2D4A3E",
    border: "none",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "#2D4A3E",
    border: "2px solid #2D4A3E",
  },
};

const base: React.CSSProperties = {
  display: "inline-block",
  fontWeight: 600,
  padding: "0.75rem 1.5rem",
  borderRadius: "0.375rem",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.2s",
};

export default function Button({ href, onClick, variant = "primary", external, children, className = "" }: ButtonProps) {
  const style = { ...base, ...styles[variant] };
  if (href && external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={style} className={className}>{children}</a>;
  }
  if (href) {
    return <Link href={href} style={style} className={className}>{children}</Link>;
  }
  return <button onClick={onClick} style={style} className={className}>{children}</button>;
}

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
<button
  onClick={onClick}
  style={{
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
    color: "#fff",
    background: "linear-gradient(90deg, #4f46e5 0%, #2563eb 100%)",
    transition: "all 0.3s"
  }}
  onMouseEnter={(e) => e.currentTarget.style.filter = "brightness(1.1)"}
  onMouseLeave={(e) => e.currentTarget.style.filter = "brightness(1)"}
>
  {text}
</button>
);

export default Button;

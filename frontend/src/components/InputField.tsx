import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", value, onChange }) => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
    width: "100%", 
  }}>
    <label style={{
      marginBottom: "0.5rem",
      fontSize: "0.9rem",
      color: "#c0bfe0"
    }}>{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "0.75rem",
        borderRadius: "8px",
        border: "1px solid #4f46e5",
        background: "#2c2545",
        color: "#fff",
        outline: "none",
        width: "100%",
        boxSizing: "border-box", 
        transition: "all 0.3s"
      }}
      onFocus={(e) => e.currentTarget.style.border = "1px solid #2563eb"}
      onBlur={(e) => e.currentTarget.style.border = "1px solid #4f46e5"}
    />
  </div>
);

export default InputField;

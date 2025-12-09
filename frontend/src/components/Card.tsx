// src/components/Card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div style={{
    maxWidth: "400px",
    width: "100%",
    margin: "50px auto",
    padding: "2rem",
    borderRadius: "12px",
    background: "#1e1b2f",
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    boxSizing: "border-box"
  }}>
    {children}
  </div>
);

export default Card;

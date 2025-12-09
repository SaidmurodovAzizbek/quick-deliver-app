import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const SignIn: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    alert(`Sign In (demo)\nPhone: ${phone}`);
  };

  return (
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
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#ffffff" }}>Sign In</h2>
      <InputField label="Phone" value={phone} onChange={setPhone} type="tel" />
      <InputField label="Password" value={password} onChange={setPassword} type="password" />
      <Button text="Sign In" onClick={handleSignIn} />
      <p style={{ textAlign: "center", marginTop: "1rem", color: "#c0bfe0" }}>
        Don’t have an account? <a href="#/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;

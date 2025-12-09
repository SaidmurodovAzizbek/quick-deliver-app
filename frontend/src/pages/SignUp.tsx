import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Card from "../components/Card";

const SignUp: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    alert(`Sign Up (demo)\nPhone: ${phone}`);
  };

  return (
  <Card>
    <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#ffffff" }}>Sign Up</h2>
    <InputField label="Phone" value={phone} onChange={setPhone} type="tel" />
    <InputField label="Password" value={password} onChange={setPassword} type="password" />
    <Button text="Sign Up" onClick={handleSignUp} />
    <p style={{ textAlign: "center", marginTop: "1rem", color: "#c0bfe0" }}>
      Already have an account? <a href="#/signin">Sign In</a>
    </p>
  </Card>
);
};

export default SignUp;

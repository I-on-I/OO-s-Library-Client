import React, { useState } from "react";
import axios from "axios";

export default function FindLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email);

    try {
      await axios.post("/mail", { name, email }).then((res) => res.data);
      console.log("인증번호를 받았습니다.");
    } catch (error) {
      console.error("인증번호를 받는 도중 오류가 발생했습니다:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">인증번호 받기</button>
    </form>
  );
}

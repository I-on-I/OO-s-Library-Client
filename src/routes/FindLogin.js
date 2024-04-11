import React, { useState } from "react";
import axios from "axios";

export default function FindLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerificationCodeSubmitted, setIsVerificationCodeSubmitted] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email);

    try {
      // 인증번호 요청
      await axios.post("/mail", { name, email }).then((res) => res.data);
      console.log("인증번호를 받았습니다.");
    } catch (error) {
      console.error("인증번호를 받는 도중 오류가 발생했습니다:", error);
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, verificationCode);

    try {
      // 인증번호 확인 요청
      await axios.post("/mail/findPassword", { code: verificationCode });
      console.log("인증번호 확인 요청을 보냈습니다.");
    } catch (error) {
      console.error("인증번호 확인하는 도중 오류가 발생했습니다:", error);
    }
  };

  return (
    <div>
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

      <form onSubmit={handleVerificationSubmit}>
        <input
          type="text"
          placeholder="인증번호"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button type="submit">제출하기</button>
      </form>
    </div>
  );
}

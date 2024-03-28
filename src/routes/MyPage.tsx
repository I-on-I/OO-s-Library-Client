import React, { useState } from "react";

const MyPage: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newNickname, setNewNickname] = useState("");
  const [showProfilePictureInput, setShowProfilePictureInput] = useState(false);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  // 비밀번호 변경 함수
  const handleChangePassword = () => {
    // 비밀번호 변경 로직 작성
    console.log("비밀번호 변경:", newPassword);
  };

  // 닉네임 변경 함수
  const handleChangeNickname = () => {
    // 닉네임 변경 로직 작성
    console.log("닉네임 변경:", newNickname);
  };

  // 회원 정보 탈퇴 함수
  const handleDeleteAccount = () => {
    // 회원 정보 탈퇴 로직 작성
    console.log("회원 정보 탈퇴");
  };

  // 프로필 사진 추가 함수
  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setProfilePicture(file);
    }
  };

  return (
    <div>
      <h1>My Page</h1>
      <div>
        <span>id : </span>
        <span>abcd</span>
      </div>

      <div>
        <h3>비밀번호 변경</h3>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleChangePassword}>변경</button>
      </div>
      <div>
        <h3>프로필 사진 추가</h3>
        <button onClick={() => setShowProfilePictureInput(true)}>
          프로필 사진 추가
        </button>
        {showProfilePictureInput && (
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        )}
        {profilePicture && (
          <img src={URL.createObjectURL(profilePicture)} alt="프로필 사진" />
        )}
      </div>
      <div>
        <h3>닉네임 변경</h3>
        <input
          type="text"
          value={newNickname}
          onChange={(e) => setNewNickname(e.target.value)}
        />
        <button onClick={handleChangeNickname}>변경</button>
      </div>
      <div>
        <h3>회원 정보 탈퇴</h3>
        <button onClick={handleDeleteAccount}>회원 정보 탈퇴</button>
      </div>
    </div>
  );
};

export default MyPage;

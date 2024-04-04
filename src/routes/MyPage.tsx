import React, { useState } from "react";

import styled from "styled-components";
import axios from "axios";
import { UserData } from "../atoms";
import { useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const MyPageSection = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 auto;
  border: 0;
  font-size: 14px;
  height: 100%;

  min-width: 320px;

  padding: 0 24px;
`;

const CheckForm = styled.form`
  padding: 24px 0;

  & > h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    margin-bottom: 4px;
  }
`;
const InputData = styled.div`
  text-align: center;
  padding-top: 24px;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  padding: 18px;
  font-size: 14px;
  font-weight: 400;
  color: #8b8b8b;
`;

const InputInfo = styled.input`
  width: 468px;
  height: 78px;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  padding: 0px 0 0 38px;
  background: #fff;
  margin-right: 12px;
`;
const SingupButton = styled.button`
  width: 468px;
  margin-top: 15px;
  height: 56px;
  border-radius: 4px;
  border: none;
  padding: 0 24px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#ffeb60")};
  color: white;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  font-size: 16px;
`;

const PictureBox = styled.div`
  margin-bottom: 16px;
`;

const Inner = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
`;

const ImageBox = styled.div`
  background-image: url("https://d2j6uvfek9vas1.cloudfront.net/profile/6152765c5ed21.png");
`;

function MyPage() {
  interface Data {
    memberEmail?: string;
    memberGender?: number;
    memberId?: string;
    memberName?: string;
    memberPassword?: string;
    memberPk?: string;
    memberProfileImg?: string;
  }
  const userData = useRecoilValue(UserData); // Accessing userData from Recoil state

  // const [memberEmail, setMemberEmail] = useState<string | null>(null);

  const [memberData, setMemberData] = useState<Data | null>(null);
  interface Info {
    password: string;
  }

  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
    setError,
  } = useForm<Info>();

  const onValid = async (data: Info) => {
    try {
      const response = await axios.post("/members/checkPassword", {
        memberPk: userData.memberPk,
        password: data.password,
      });

      if (response.data) {
        setCheck(true);
        const userResponse = await axios.get(`/members/${userData.memberPk}`);
        const user = userResponse.data;
        console.log(user);

        setMemberData(user); // 사용자 이메일 설정
      } else {
        alert("비밀번호가 틀렸습니다");
      }
    } catch (error) {
      console.log("fetching에 실패했습니다!", error);
    }
  };
  const [check, setCheck] = useState(false);
  const deleteBtn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: Info
  ) => {
    event.preventDefault();
    axios
      .delete(`/members/${userData.memberPk}`, {
        data: { memberPassword: data.password },
      })
      .then((res) => {
        console.log(res.data);
        alert("회원 정보가 삭제 되었습니다!");
      });
  };
  return (
    <MyPageSection>
      {!check ? (
        <CheckForm onSubmit={handleSubmit(onValid)}>
          <h3>비밀번호를 입력해주세요</h3>
          <InputData>
            <InputInfo
              {...register("password", {
                required: "write here",
                minLength: 4,
              })}
              placeholder="비밀번호 입력"
            />
            <SingupButton disabled={!isValid} type="submit">
              확인
            </SingupButton>
          </InputData>
        </CheckForm>
      ) : (
        <>
          {" "}
          {memberData && (
            <div>
              {" "}
              <div>{memberData.memberEmail}</div>{" "}
              <div>{memberData.memberGender}</div>{" "}
              <div>{memberData.memberId}</div>{" "}
              <div>{memberData.memberName}</div>{" "}
              <div>{memberData.memberPassword}</div>{" "}
              <div>{memberData.memberPk}</div>{" "}
              <div>
                <img src={memberData.memberProfileImg} />
              </div>
              <button
                onClick={(e) =>
                  deleteBtn(e, { password: userData.memberPassword })
                }
              >
                계정 삭제
              </button>
            </div>
          )}
        </>
      )}
    </MyPageSection>
  );
}
export default MyPage;

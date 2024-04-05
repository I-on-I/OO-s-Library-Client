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
  interface IForm {
    id: string;
    password: string;
    password1: string;
    name: string;
    email: string;
    gender: string;
    extraError?: string;
  }

  const userData = useRecoilValue(UserData); // Accessing userData from Recoil state

  // const [memberEmail, setMemberEmail] = useState<string | null>(null);

  const [memberData, setMemberData] = useState<Data | null>(null);
  interface Info {
    password: string;
  }
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1, isValid: isValid1 },
    setError: setError1,
  } = useForm<Info>();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2, isValid: isValid2 },
    setError: setError2,
  } = useForm<IForm>();

  const onValid1 = async (data: Info) => {
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

  const onValid2 = (data: IForm) => {
    console.log(data);
    axios
      .put(`/members/${userData.memberPk}`, {
        memberPk: userData.memberPk,
        memberId: data.id,
        memberName: data.name,
        memberEmail: data.email,
        memberPassword: userData.memberPassword,
        memberGender: "1",
        memberProfileImg: "success",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(data);
      });
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
        <CheckForm onSubmit={handleSubmit1(onValid1)}>
          <h3>비밀번호를 입력해주세요</h3>
          <InputData>
            <InputInfo
              {...register1("password", {
                required: "write here",
                minLength: 4,
              })}
              placeholder="비밀번호 입력"
            />
            <SingupButton disabled={!isValid1} type="submit">
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
              <div style={{ marginTop: "14px" }}>
                <form onSubmit={handleSubmit2(onValid2)}>
                  <span>{errors2?.id?.message}</span>
                  <InputInfo
                    {...register2("id", {
                      required: "Id is required",
                    })}
                    placeholder="아이디를 입력"
                  />{" "}
                  <InputInfo
                    {...register2("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Only emails allowed",
                      },
                    })}
                    placeholder="이메일을 입력"
                  />{" "}
                  <span>{errors2?.email?.message}</span>
                  <InputInfo
                    {...register2("name", {
                      required: "write here",
                      minLength: 2,
                    })}
                    placeholder="이름을 입력"
                  />
                  <span>{errors2?.name?.message}</span>
                  <InputInfo
                    {...register2("password", {
                      required: "write here",
                      minLength: 5,
                    })}
                    placeholder="비밀번호를 입력"
                  />
                  <span>{errors2?.password?.message}</span>
                  <div>
                    <label htmlFor="male">
                      <input
                        type="radio"
                        id="male"
                        checked
                        {...register2("gender")}
                      />{" "}
                      남성
                    </label>
                    <label htmlFor="female">
                      <input
                        type="radio"
                        id="female"
                        {...register2("gender")}
                      />{" "}
                      여성
                    </label>
                  </div>
                  <SingupButton disabled={!isValid2} type="submit">
                    업데이트
                  </SingupButton>
                </form>
              </div>
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

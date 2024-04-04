import styled from "styled-components";
import login from "../assets/login.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginSection = styled.div`
  display: flex;
  min-height: 100vh;
`;
const LoginImg = styled.div<{ Img: string }>`
  width: 100%;
  height: 1000px;
  background: url(https://d3udu241ivsax2.cloudfront.net/v3/images/login/promotion_intro_bg.ac5237a5bed49b864cccee5224a464e4.jpg)
    50% center / cover no-repeat;
  background-repeat: no-repeat;
`;

const LoginContent = styled.div`
  width: 640px;
  height: 832px;
  padding: 100px 84px;
`;

const AppName = styled.div`
  height: 43.409px;
  flex-shrink: 0;
  color: #292929;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InputInfo = styled.input`
  width: 468px;
  height: 78px;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  padding: 0px 0 0 38px;
  background: #fff;
  margin-bottom: 12px;
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

interface IForm {
  id: string;
  password: string;
  password1: string;
  name: string;
  email: string;
  gender: string;
  extraError?: string;
}

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<IForm>({});

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same!!!" },
        { shouldFocus: true }
      );
    } else {
      //form 으로 보낼 때
      // let formData = new FormData();
      // formData.append("memberId", data.id);
      // formData.append("memberName", data.name);
      // formData.append("memberEmail", data.email);
      // formData.append("memberPassword", data.password);
      // formData.append("memberGender", data.gender);
      // console.log(formData);

      //request body 로 보낼 때
      axios
        .post("/members", {
          memberId: data.id,
          memberName: data.name,
          memberEmail: data.email,
          memberPassword: data.password,
          memberGender: data.gender,
        })
        .then((response) => {
          console.log(response.data);
          console.log("서버 성공");
        })
        .catch(function (e) {
          alert("회원가입에 실패했습니다!");
          console.log(data);
        });
      navigate("/");
    }
  };
  // const onValid = (data: IForm) => {
  //   let formData = new FormData();
  //   console.log(data.email);
  //   console.log(data.password);

  //   formData.append("username", data.email);
  //   formData.append("password", data.password);
  //   axios
  //     .post("/login", formData)
  //     .then((response) => {
  //       console.log(response.data);
  //       console.log("서버 fetch 성공");

  //       if (response.data.pk) {
  //         alert("로그인에 성공했습니다!");
  //         navigate(`/${data.email}/library`);
  //       } else {
  //         alert("비밀번호 또는 아이디가 틀렸습니다.");
  //         setError(
  //           "password",
  //           {
  //             message: "password are not the same!",
  //           },
  //           { shouldFocus: true }
  //         );
  //       }
  //     })
  //     .catch(function (error) {
  //       alert("fail!!");
  //     });
  // };
  console.log(errors);
  return (
    <>
      <LoginSection>
        <LoginImg Img={login} />
        <LoginContent>
          <AppName>회원가입</AppName>

          <div style={{ marginTop: "14px" }}>
            <form onSubmit={handleSubmit(onValid)}>
              <span>{errors?.id?.message}</span>
              <InputInfo
                {...register("id", {
                  required: "Id is required",
                })}
                placeholder="아이디를 입력"
              />{" "}
              <InputInfo
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Only emails allowed",
                  },
                })}
                placeholder="이메일을 입력"
              />{" "}
              <span>{errors?.email?.message}</span>
              <InputInfo
                {...register("name", {
                  required: "write here",
                  minLength: 2,
                })}
                placeholder="이름을 입력"
              />
              <span>{errors?.name?.message}</span>
              <InputInfo
                {...register("password", {
                  required: "write here",
                  minLength: 5,
                })}
                placeholder="비밀번호를 입력"
              />
              <span>{errors?.password?.message}</span>
              <InputInfo
                {...register("password1", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Your password is too short.",
                  },
                })}
                placeholder="비밀번호를 다시 입력"
              />
              <span>{errors?.password1?.message}</span>{" "}
              <div>
                <label htmlFor="male">
                  <input
                    type="radio"
                    id="male"
                    value="0"
                    {...register("gender")} // Register the gender field
                  />{" "}
                  남성
                </label>
                <label htmlFor="female">
                  <input
                    type="radio"
                    id="female"
                    value="1"
                    {...register("gender")} // Register the gender field
                  />{" "}
                  여성
                </label>
              </div>
              <SingupButton disabled={!isValid} type="submit">
                회원가입
              </SingupButton>
            </form>
          </div>
        </LoginContent>
      </LoginSection>
    </>
  );
}

export default Signup;

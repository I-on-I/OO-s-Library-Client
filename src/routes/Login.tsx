import styled from "styled-components";

import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { UserData } from "../atoms";
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
  width: 612px;

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

const AppSummary = styled.div`
  color: #545454;
  font-family: "IBM Plex Serif";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 14px;
`;

const InputInfo = styled.input<{ marginInput?: string }>`
  width: 468px;
  height: 73px;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  padding: 0px 0 0 38px;
  background: #fff;
  margin-bottom: ${(props) => props.marginInput};
`;
const LoginButton = styled.button<{ disabled: boolean }>`
  width: 468px;
  margin-top: 15px;
  height: 56px;
  border-radius: 4px;
  border: none;
  padding: 0 24px;
  background-color: ${({ disabled }) => (disabled ? "#fff7c4a3" : "#ffeb60")};
  color: ${({ disabled }) => (disabled ? "#black" : "#white")};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  font-size: 16px;
`;
const SocialLoginSection = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
  display: flex;
`;

const SocialLogin = styled.img<{ url: string }>`
  width: 40px;
  height: 40px;
  background-color: red;
  margin: 0 10px;
  border-radius: 25px;
  background: url(${(props) => props.url});
`;

interface IForm {
  id: string;
  password: string;
}

function Login() {
  const [userData, setUserData] = useRecoilState(UserData);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<IForm>({});

  const NAVER_CLIENT_ID = "Smcbfw_WXTXz1O5VFd2N";

  const REDIRECT_URL = "login/oauth2/code/naver";

  let STATE = "false";

  const socialLogin = () => {
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URL}`;

    window.location.href = NAVER_AUTH_URL;
  };
  const onValid = (data: IForm) => {
    let formData = new FormData();
    console.log(data.id);
    console.log(data.password);
    formData.append("username", data.id);
    formData.append("password", data.password);

    axios
      .post("/login", formData)
      .then((response) => {
        console.log(response.data);
        console.log("서버 fetch 성공");

        if (response.data.pk) {
          const { pk, memberName, memberId } = response.data;
          // Update Recoil state with user data upon successful login
          setUserData({
            memberName,
            memberPk: pk,
            memberId,
          });

          alert("로그인에 성공했습니다!");
          navigate(`/${data.id}/library`);
        } else {
          alert("비밀번호 또는 아이디가 틀렸습니다.");
          setError(
            "password",
            {
              message: "password are not the same!",
            },
            { shouldFocus: true }
          );
        }
      })
      .catch(function (error) {
        alert("fail!!");
      });
  };

  const socials = [
    {
      url: "https://d3udu241ivsax2.cloudfront.net/v3/images/login/kakao-icon.9c9940291430ca6ad83b9ae1f3cc81a8.svg",
    },
    {
      url: "https://d3udu241ivsax2.cloudfront.net/v3/images/login/naver-icon.7128d171ea0b01233bb4b32a2b5ad260.svg",
    },
    {
      url: "https://d3udu241ivsax2.cloudfront.net/v3/images/login/facebook-icon.f3e1fcc7af9f4cac5be2179a846417f8.svg",
    },
    {
      url: "https://d3udu241ivsax2.cloudfront.net/v3/images/login/apple-icon.c88b92e286a1d29bcf581e12ac076d44.svg",
    },
  ];
  return (
    <>
      <LoginSection>
        <LoginImg
          Img={
            "https://d3udu241ivsax2.cloudfront.net/v3/images/login/promotion_intro_bg.ac5237a5bed49b864cccee5224a464e4.jpg"
          }
        />
        <LoginContent>
          <AppName>00의 서재</AppName>
          <AppSummary>서로 공유하고.. 재밌는 웹 사이트</AppSummary>

          <form onSubmit={handleSubmit(onValid)}>
            {" "}
            <div style={{ marginTop: "60px" }}>
              <InputInfo
                {...register("id", {
                  required: "id is required",
                })}
                placeholder="아이디 입력"
              />{" "}
              <span>{errors?.id?.message}</span>
              <InputInfo
                {...register("password", {
                  required: "write here",
                  minLength: 4,
                })}
                placeholder="비밀번호를 입력"
              />
              <LoginButton disabled={!isValid} type="submit">
                로그인
              </LoginButton>
            </div>
          </form>

          <div
            style={{
              marginTop: "67px",
              textAlign: "center",
              color: "rgba(12, 12, 12, 0.70)",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "rgba(12, 12, 12, 0.70)",
              }}
              to="/signup"
            >
              회원가입
            </Link>{" "}
            <span> | </span>
            <Link
              style={{
                textDecoration: "none",
                color: "rgba(12, 12, 12, 0.70)",
              }}
              to="/signup"
            >
              비밀번호 찾기
            </Link>{" "}
            <span> | </span>
            <Link
              style={{
                textDecoration: "none",
                color: "rgba(12, 12, 12, 0.70)",
              }}
              to="/signup"
            >
              관리자 로그인
            </Link>
          </div>
          <div style={{ textAlign: "center", marginTop: " 25px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="182"
              height="2"
              viewBox="0 0 182 2"
              fill="none"
            >
              <path d="M181.5 1H0" stroke="#D9D9D9" />
            </svg>{" "}
            <span
              style={{
                color: "6E6E6E",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: "500",
                margin: "0 10px",
              }}
            >
              OR
            </span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="182"
              height="2"
              viewBox="0 0 182 2"
              fill="none"
            >
              <path d="M181.5 1H0" stroke="#D9D9D9" />
            </svg>{" "}
          </div>

          <SocialLoginSection>
            {socials.map((social, index) => (
              <SocialLogin url={social.url} onClick={socialLogin} />
            ))}
          </SocialLoginSection>
        </LoginContent>
      </LoginSection>
    </>
  );
}

export default Login;

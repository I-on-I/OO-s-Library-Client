import styled from "styled-components";
import login from "../assets/login.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSection = styled.div`
  margin-top: 50px;
  width: 1280px;
  height: 832px;
  display: flex;
  box-shadow: 8px 5px 10px 3px rgba(0, 0, 0, 0.25);
`;
const LoginImg = styled.div<{ Img: string }>`
  width: 640px;
  height: 832px;
  background: url(${(props) => props.Img});

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
      navigate("/");
    }
  };

  console.log(errors);
  return (
    <>
      <BodyWrapper>
        <LoginSection>
          <LoginImg Img={login} />
          <LoginContent>
            <AppName>회원가입</AppName>

            <div style={{ marginTop: "14px" }}>
              <form onSubmit={handleSubmit(onValid)}>
                <InputInfo
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Only emails allowed",
                    },
                  })}
                  placeholder="이메일을 입력해주세요"
                />{" "}
                <span>{errors?.id?.message}</span>
                <InputInfo
                  {...register("id", {
                    required: "Id is required",
                  })}
                  placeholder="아이디를 입력해주세요"
                />
                <span>{errors?.email?.message}</span>
                <InputInfo
                  {...register("name", {
                    required: "write here",
                    minLength: 2,
                  })}
                  placeholder="이름을 입력해주세요"
                />
                <span>{errors?.name?.message}</span>
                <InputInfo
                  {...register("password", {
                    required: "write here",
                    minLength: 5,
                  })}
                  placeholder="Password"
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
                  placeholder="Password1"
                />
                <span>{errors?.password1?.message}</span>
                <SingupButton disabled={!isValid} type="submit">
                  회원가입
                </SingupButton>
              </form>
            </div>
          </LoginContent>
        </LoginSection>
      </BodyWrapper>
    </>
  );
}

export default Signup;

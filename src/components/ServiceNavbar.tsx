import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledNavItem = styled.li`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #dddddd;
  align-items: center;
  height: 64px;
  width: 100%;
`;
const StyledUserName = styled.div`
  margin-left: 20px;
  font-size: 12px;
  width: 100%;
`;

const NavbarLink = styled(Link)<{ styleBtn: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  height: 34px;

  background: ${(props) => (props.styleBtn === "black" ? "black" : "none")};
  color: ${(props) => (props.styleBtn === "black" ? "white" : "black")};

  padding: 7px 25px;
  border-radius: 100px;
  font-size: 12px;
  margin-right: 12px;
  line-height: 18px;
  text-align: center;
`;

function ServiceNavbar() {
  const { id } = useParams();
  return (
    <>
      <StyledNavItem>
        <StyledUserName>{id}님 환영합니다.</StyledUserName>
        <StyledNavItem>
          <NavbarLink to="" styleBtn="none">
            내 책
          </NavbarLink>
          <NavbarLink to="calendar" styleBtn="none">
            캘린더
          </NavbarLink>
          <NavbarLink to="mypage" styleBtn="none">
            마이 페이지
          </NavbarLink>
          <NavbarLink to="/Login" id="logout" styleBtn="black">
            로그아웃
          </NavbarLink>
        </StyledNavItem>
      </StyledNavItem>
      <Outlet />
    </>
  );
}

export default ServiceNavbar;

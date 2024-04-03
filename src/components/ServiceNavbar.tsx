import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { response } from "express";
const StyledNavItem = styled.li`
  display: flex;

  margin: 0 auto;
  max-width: 1500px;

  align-items: center;
  height: 64px;
  width: 100%;
`;
const StyledUserName = styled.div`
  font-size: 18px;
  width: 100px;
  margin-right: 25px;
`;

const NavbarLink = styled(Link)<{ styleBtn: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 34px;
  background: none;
  color: black;
  border-radius: 100px;
  padding: 12px 24px;
  font-size: 20px;
  margin-right: 12px;
  line-height: 18px;
  text-align: center;
`;

const LogoutBtn = styled(Link)`
  background-color: #333;
  width: 80px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  margin-left: auto;
`;

const logout = () => {
  axios.get("/logout").then((response) => {
    // console.log(response.data);
  });
};
function ServiceNavbar() {
  const { id } = useParams();
  return (
    <>
      <div style={{ borderBottom: "1px solid #dddddd" }}>
        <StyledNavItem>
          <StyledUserName>{id}의 서재</StyledUserName>
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
            <LogoutBtn to="/Login" id="logout" onClick={logout}>
              로그아웃
            </LogoutBtn>
          </StyledNavItem>
        </StyledNavItem>
      </div>

      <Outlet />
    </>
  );
}

export default ServiceNavbar;

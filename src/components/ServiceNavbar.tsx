import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.ul`
  display: grid;
  grid-template-columns: 1fr auto; /* 첫 번째 열은 나머지 공간을 차지하고, 두 번째 열은 컨텐츠에 맞게 크기를 설정 */
  height: 100%;
  list-style: none;
  margin-top: 20px;
  border-bottom: 1px solid #a1a1a1;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

const StyledUserName = styled.div`
  margin-left: 20px;
`;

const StyledNavItem = styled.li`
  margin: 0 23px;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.id === "logout" ? "white" : "black")};
  background: ${(props) => (props.id === "logout" ? "black" : "none")};
  padding: 10px 25px;
  border-radius: ${(props) => (props.id === "logout" ? "100px" : "0")};
`;

function ServiceNavbar() {
  const { id } = useParams();
  return (
    <>
      <StyledNavbar>
        <StyledUserName>{id}님 환영합니다.</StyledUserName>
        <StyledNavItem>
          <NavbarLink to="">내 책</NavbarLink>
          <NavbarLink to="calendar">캘린더</NavbarLink>
          <NavbarLink to="mypage">마이 페이지</NavbarLink>
          <NavbarLink to="/Login" id="logout">
            로그아웃
          </NavbarLink>
        </StyledNavItem>
      </StyledNavbar>
      <Outlet />
    </>
  );
}

export default ServiceNavbar;

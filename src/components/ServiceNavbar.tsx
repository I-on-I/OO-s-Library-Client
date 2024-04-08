import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

const NavbarLink = styled(Link)<{ styleBtn: string; isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isActive ? "white" : "black")};
  background: none;
  background-color: ${(props) => (props.isActive ? "#7ea2c9" : "transparent")};

  padding: 12px 24px;
  font-size: 20px;
  margin-right: 12px;
  line-height: 18px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: ${(props) =>
      props.isActive
        ? "#6b849f"
        : "#f0f0f0"}; /* 활성화된 경우 hover 시 배경 색상 유지 */
  }
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
  axios
    .post("/logout")
    .then((res) => {
      console.log(res.data);
    })
    .catch(function (error) {});
};
function ServiceNavbar() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div style={{ borderBottom: "1px solid #dddddd" }}>
        <StyledNavItem>
          <StyledUserName>{id}의 서재</StyledUserName>
          <StyledNavItem>
            <NavbarLink
              to=""
              styleBtn="none"
              isActive={location.pathname === "/library"}
            >
              내 책
            </NavbarLink>
            <NavbarLink
              to="calendar"
              styleBtn="none"
              isActive={location.pathname === "/library/calendar"}
            >
              캘린더
            </NavbarLink>
            <NavbarLink
              to="mypage"
              styleBtn="none"
              isActive={location.pathname === "/library/mypage"}
            >
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

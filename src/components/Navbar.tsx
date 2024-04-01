import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavItem = styled.li`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #dddddd;
  align-items: center;
  height: 64px;
  width: 100%;
`;

const NavbarLink = styled(Link)<{ styleBtn: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 85px;
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

function Navbar() {
  return (
    <>
      <StyledNavItem>
        <NavbarLink to="#" styleBtn="none">
          문의
        </NavbarLink>
        <NavbarLink to="#" styleBtn="none">
          문의
        </NavbarLink>{" "}
        <NavbarLink to="#" styleBtn="none">
          문의
        </NavbarLink>
        <NavbarLink to="/Login" styleBtn="black">
          로그인
        </NavbarLink>
      </StyledNavItem>
    </>
  );
}

export default Navbar;

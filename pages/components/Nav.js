import styled from 'styled-components';
import Router from "next/router"

function Nav() {
  
  return (
    <Nav1>
        <NavLists>
            <NavList onClick={()=>Router.push("/shop/search")}>살때</NavList>
            <NavList>팔때</NavList>
            <NavList>직영차</NavList>
            <NavList>고객센터</NavList>
        </NavLists>
            <NavBars>
                <NavBar/>
                <NavBar/>
                <NavBar/>
            </NavBars>
    </Nav1>
  );
}

export default Nav;

const Nav1 = styled.div`
  position: absolute;
  top:50%;
  right:20px;
  width:400px;
  margin-top:-16px;
  padding: 10px 0px;
`;

const NavLists = styled.div`
  position: absolute;
  left:34px;
`;

const NavList = styled.button`
  position: relative;
  color: #fff;
  cursor:pointer;
  background: none;
  border: none;
  margin-left: 30px;
  &:focus {
        outline: none;
    }
`;

const NavBars = styled.div`
  position: absolute;
  right: 0px;
  width: 30px;
  margin-top: -5px;
`;

const NavBar = styled.div`
  position: relative;
  width: 100%;
  border-bottom: solid #fff 2.5px;
  padding: 3px 0px;
  cursor:pointer;
`;
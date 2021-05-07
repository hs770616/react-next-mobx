import styled from "styled-components";
import Router from "next/router";
import Nav from "./components/Nav";
import MainSearchInput from "./components/MainSearchInput";
import { observer, inject } from "mobx-react";

const Home = inject("searchStore")(
  observer(({ searchStore }) => {
    return (
      <Container>
        <Top>
          <Logo onClick={() => Router.push("/")}>AUTOHUB</Logo>
          <Nav />
        </Top>
        <Center>
          <MainShow>
            <MainHead>
              <MainText>이렇게 똑똑한 중고차 검색은 처음일거야.</MainText>
              <MainUnderLine />
            </MainHead>
            <MainBody>
              <MainSubText>
                지금 바로 키워드로 검색해보세요! 무엇이든 찾아드립니다.
              </MainSubText>
              <MainSearchInput />
              <MainLists>
                <MainList>현대</MainList>
                <MainList>기아</MainList>
                <MainList>벤츠</MainList>
                <MainList>BMW</MainList>
                <MainList>제네시스</MainList>
              </MainLists>
            </MainBody>
          </MainShow>
        </Center>
      </Container>
    );
  })
);
export default Home;

const Container = styled.div`
  position: relative;
  background-color: rgb(241 23 68);
  width: 100%;
  height: 100%;
`;

const Top = styled.div`
  position: relative;
  height: 60px;
`;

const Logo = styled.div`
  position: absolute;
  color: #fff;
  font-size: 24px;
  top: 50%;
  left: 20px;
  margin-top: -16px;
  cursor: pointer;
  border-bottom: solid #fff 2.5px;
`;

const Center = styled.div`
  position: relative;
  height: 680px;
`;

const MainShow = styled.div`
  position: relative;
  padding: 70px 40px;
  height: 100%;
`;

const MainUnderLine = styled.div`
  position: absolute;
  width: calc(100% - 367px);
  height: 0px;
  border-top: solid #fff 5px;
  border-bottom: solid #fff 5px;
  border-radius: 5px;
  left: 368px;
  top: 270px;
`;

const MainText = styled.div`
  position: relative;
  color: #fff;
  font-size: 80px;
  width: 450px;
  height: 303px;
`;

const MainHead = styled.div`
  position: relative;
  width: 100%;
`;

const MainBody = styled.div`
  position: relative;
  width: 100%;
`;

const MainSubText = styled.div`
  position: relative;
  top: 40px;
  font-size: 14px;
  color: #fff;
`;

const MainLists = styled.div`
  position: relative;
  top: 80px;
  width: 100%;
`;

const MainList = styled.button`
  position: relative;
  color: #fff;
  cursor: pointer;
  background: none;
  border: solid #fff 1.5px;
  width: 120px;
  height: 40px;
  padding: 10px 0px;
  border-radius: 50px;
  margin: 0 18px;
  &:focus {
    outline: none;
  }
`;

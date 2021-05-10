import { useState, useCallback } from "react";
import styled from "styled-components";
import Router from "next/router";
import { observer, inject } from "mobx-react";
// import SearchStore from "../../src/stores/search-store";

// const MainSearchInput = () => {
//   console.log("render - MainSearchInput");
//   console.log("nowVal: ", SearchStore.search);

//   const getStore = useCallback(() => {
//     console.log("======================================");
//     console.log(".searchVal(MSI): ", SearchStore.search);
//     console.log(".computedSearch(MSI): ", SearchStore.computedSearch);
//     Router.push("/shop/search").then((r) => console.log("push", r));
//   }, [SearchStore]);

//   return (
//     <>
//       <MainSearchInputCtn
//         onChange={(e) => SearchStore.updateSearch(e.target.value)}
//       />
//       <MainSearchInputBtn onClick={() => getStore()}>go</MainSearchInputBtn>
//       <Button1 onClick={() => SearchStore.increaseNum()}>+1</Button1>
//       <Button2
//         onClick={() => console.log("doubleNum! : ", SearchStore.doubleNum)}
//       >
//         x2
//       </Button2>
//     </>
//   );

// import SearchStore from "../../src/stores/search-store";

const MainSearchInput = inject("searchStore")(
  observer(({ searchStore }) => {
    console.log("render - MainSearchInput");
    console.log("nowVal: ", searchStore.search);

    const getStore = useCallback(() => {
      console.log("======================================");
      console.log(Router.location);
      console.log(".searchVal(MSI): ", searchStore.search);
      console.log(".computedSearch(MSI): ", searchStore.computedSearch);
      Router.push("/shop/search").then((r) => console.log("push", r));
      // Router.reload();
    }, [searchStore]);

    return (
      <>
        <MainSearchInputCtn
          onChange={(e) => searchStore.updateSearch(e.target.value)}
        />
        <MainSearchInputBtn onClick={() => getStore()}>go</MainSearchInputBtn>
        <Button1 onClick={() => searchStore.increaseNum()}>+1</Button1>
        <Button2
          onClick={() => console.log("doubleNum! : ", searchStore.doubleNum)}
        >
          x2
        </Button2>
      </>
    );
  })
);
export default MainSearchInput;

const MainSearchInputCtn = styled.input`
  position: relative;
  top: 60px;
  background-color: #fff;
  height: 70px;
  border: none;
  border-radius: 35px;
  width: 100%;
  font-size: 20px;
  &:focus {
    outline: none;
  }
  padding: 20px 30px;
`;

const MainSearchInputBtn = styled.button`
  position: absolute;
  top: 78px;
  right: 0px;
  height: 70px;
  width: 70px;
  background-color: #00000055;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Button1 = styled.button`
  position: absolute;
  top: 318px;
  right: 0px;
  height: 70px;
  width: 70px;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Button2 = styled.button`
  position: absolute;
  top: 418px;
  right: 0px;
  height: 70px;
  width: 70px;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

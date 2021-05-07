import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
// import SearchStore from "../../src/stores/search-store";

//  inject, observer 다른 컴포넌트 간에 상태가 공유가 안됨.
// export default inject('searchStore')
// (observer(
//     function ObservingBoard({searchStore}) {
//         console.log('render - ObservingBoard')
//         console.log('observedVal: ', searchStore.searchVal)

//         return (
//             <>
//                 <Board>
//                     {searchStore.searchVal}
//                 </Board>
//             </>
//         );
//     }
// ))

// const ObservingBoard = inject("searchStore")(
//   observer(({ searchStore }) => {
//     console.log("render - ObservingBoard");
//     console.log("observedVal: ", searchStore.searchVal);

//     return (
//       <>
//         <Board>{searchStore.searchVal}</Board>
//       </>
//     );
//   })
// );

// export default ObservingBoard;

// function ObservingBoard({ searchStore }) {
//   console.log("render - ObservingBoard");
//   console.log("observedVal: ", searchStore.search);

//   return (
//     <>
//       <Board>{searchStore.search}</Board>
//     </>
//   );
// }

// export default inject(({ searchStore }) => ({
//   searchStore: searchStore,
// }))(observer(ObservingBoard));

const ObservingBoard = inject("searchStore")(
  // observer(({ searchStore }) => {
  observer(({ searchStore }) => {
    console.log("render - ObservingBoard");
    console.log("observedVal: ", searchStore.search);

    return (
      <>
        <Board1>{searchStore.search}</Board1>
        <Board2>{searchStore.num}</Board2>
      </>
    );
  })
);

export default ObservingBoard;

// export default inject('searchStore')(observer(ObservingBoard))
// export default inject(({searchStore}) =>
// ({searchStore: searchStore}))(observer(ObservingBoard))

// inject, observer 없이 다른 컴포넌트 간에 상태가 공유됨.
// export default inject(({searchStore: object}) => ({ // _app.js를 통해 stores 디렉토리 하단의 index에서 정의해준 네임을 가져오게 되며, inject에서 정의해주는 값으로 컴포넌트 내부에서 사용하게 된다.
//     searchStore: searchStore,
// }))
// (observer(ObservingBoard))

//  // inject, observer 없이 다른 컴포넌트 간에 상태가 공유됨.
// // export default
// function ObservingBoard({searchStore}) {
//     console.log('render - ObservingBoard')
//     console.log('observedVal: ', searchStore.searchVal)

//     return (
//         <>
//             <Board>{searchStore.searchVal}</Board>
//         </>
//     );
// }

const Board1 = styled.div`
  position: absolute;
  top: 240px;
  font-size: 40px;
`;
const Board2 = styled.div`
  position: absolute;
  top: 340px;
  font-size: 40px;
`;

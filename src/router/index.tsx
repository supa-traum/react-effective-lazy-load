import { BrowserRouter, matchPath, Routes } from "react-router-dom";
import PageRoute from "./page-route";
import React from "react";

const PAGE_LIST = [
  {
    path: '/',
  },
  {
    path: '/a',
  },
  {
    path: '/b',
  },
  {
    path: '/c',
  },
  {
    path: '/d',
  },
  {
    path: '/e',
  },
  {
    path: '/f',
  }
];

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        {PAGE_LIST.map(({path}, idx) => {
          // 현재 url 정보와 path가 같은지 판단하는 로직!
          const isActive = matchPath(location.pathname , path);

          console.log('isActive' , isActive);
          return isActive ? <PageRoute path={path} type={'PAGES'} key={idx}/> : <React.Fragment key={idx}></React.Fragment>
        })}
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageRoute from "./page-route";

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
        {PAGE_LIST.map(({path},idx) => <Route key={idx} path={path} element={<PageRoute path={path} type="PAGES"/>}/>)}
      </Routes>
    </BrowserRouter>
  )
}
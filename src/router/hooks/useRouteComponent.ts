import { useEffect, useState } from "react";

export interface RouteComponentProps {
  path : string;
  type : 'PAGES' | 'LAYER';
}

// 호진 FIXME: import 모듈 찾는걸 해결해야함!
// root path일 경우에는 빈값으로 import 해야지 index 파일이 보임!
const pageImport = (path:string) => import(`../../pages${path === '/' ? '' : path}`);
const layerImport = (path:string) => import(`@/layer${path}`);

export default function useRouteComponent({path, type} : RouteComponentProps){
  const [component , setComponent] = useState(null);

  useEffect(() => {
    const importModule = async () => {
      if(type === 'PAGES'){
        const {default: Page} = await pageImport(path);
        setComponent(() => Page);
      }

      if (type === 'LAYER') {
        const {default: Layer} = await layerImport(path);
        setComponent(() => Layer);
      }
    };

    importModule();
  },[path]);

  return { component }
}
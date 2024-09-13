import { useEffect, useState } from "react";

export interface RouteComponentProps {
  path : string;
  type : 'PAGES' | 'LAYER';
}

const pageImport = (path:string) => import(`pages${path}`);
const layerImport = (path:string) => import(`layer${path}`);

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
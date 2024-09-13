import { createElement, useEffect, useState } from "react";

interface Props {
  path : string;
}

export default function RouteComponent({path}:Props){
  const [component , setComponent] = useState(null);

  useEffect(() => {
    const importModule = async () => {
      const { default:C } = await import(`pages/${(path)}`);
      setComponent(() => C);
    };

    importModule();
  },[path]);

  return <>{component ? createElement(component) : null}</>
}
import { createElement } from "react";
import { Route } from "react-router-dom";
import useRouteComponent, { RouteComponentProps } from "../hooks/useRouteComponent";

export default function PageRoute ({ path ,type }: RouteComponentProps){
  const { component } = useRouteComponent({path , type});

  console.log('component' , component);

  return (
    <Route path={path} element={component ? createElement(component) : null} />
  )
}
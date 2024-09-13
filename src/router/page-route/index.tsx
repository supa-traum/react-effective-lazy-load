import { createElement } from "react";
import useRouteComponent, { RouteComponentProps } from "../hooks/useRouteComponent";

export default function PageRoute ({ path ,type }: RouteComponentProps){
  const { component } = useRouteComponent({path , type});

  console.log('component' , component);

  return component ? createElement(component) : null;
}
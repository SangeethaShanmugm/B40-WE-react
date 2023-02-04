import React from "react";
import { useGlobalContext } from "./Example";

export default function Sample2() {
  const name = useGlobalContext();
  return <div>Hiii {name}😉😉🥳🥳🥳 -sample2</div>;
}

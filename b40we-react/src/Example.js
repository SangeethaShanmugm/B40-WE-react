import React, { useState, createContext, useContext } from "react";
import Sample2 from "./Sample2";

//1. creating  - createContext -✅
// 2. Publisher - provider - context.Provider ✅
// 3. Subscriber - useContext  - useContext(context)✅

const NameContext = createContext();

export function Example() {
  const [name, setName] = useState("Jack");
  const [nameList, setNameList] = useState(["Harry", "Peter"]);
  //   const name = "Jack";
  return (
    <NameContext.Provider value={name}>
      <div>
        <Sample />
        <Sample1 />
        <Sample2 />
        {/* <h1>Hello {name}</h1> */}
        {/* {nameList.map((nm, index) => (
          <Sample key={index} name={nm} />
        ))}
        <input
          type="text"
          value={name}
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setNameList([name])}>Change Name</button> */}
      </div>
    </NameContext.Provider>
  );
}

function Sample() {
  const name = useContext(NameContext);
  return (
    <div>
      <h1>Hello {name} - sample</h1>
      {/* <Sample1 name={name} /> */}
    </div>
  );
}

function Sample1() {
  const name = useContext(NameContext);
  return (
    <div>
      <h1>Welcome {name} - sample1</h1>
    </div>
  );
}

export const useGlobalContext = () => {
  return useContext(NameContext);
};

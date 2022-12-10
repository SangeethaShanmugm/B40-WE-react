import "./App.css";
import { useState } from "react";
export default function App() {
  //Js starts
  //Array of strings
  // const people = ["Harish", "rahul", "Devi", "Praveen", "sajid"];
  // Array of object - {}
  const users = [
    {
      name: "Harish",
      pic: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "Rahul",
      pic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "Bhuva",
      pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg",
    },
    {
      name: "Devi",
      pic: "https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg",
    },
  ];

  //JS ends
  //JSX starts
  return (
    <div className="App">
      {/* {users.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} />
      ))} */}

      {/* {people.map((person) => (
        <Welcome name={person} />
      ))} */}
      <AddColor />
    </div>
  );
  //JSX ends
}

function AddColor() {
  // const color = "skyblue";
  const [color, setColor] = useState("skyblue");
  const styles = {
    backgroundColor: color,
    fontSize: "24px",
  };

  return (
    <div className="add-color">
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        type="text"
      />
    </div>
  );
}

//task - create a dislike button
function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      {/* onClick -cameCase */}
      <button
        className="btn-like"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍 {like}{" "}
      </button>
      <button
        className="btn-dislike"
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        👎 {dislike}{" "}
      </button>
    </div>
  );
}

function Msg({ name, pic }) {
  return (
    <div className="user-container">
      <img className="profile-pic" src={pic} alt="profile" />
      <h1>Hi, {name}</h1>
      <Counter />
    </div>
  );
}

function Welcome({ name }) {
  return (
    <div>
      <h1>Hello {name}🥳🥳😀😀</h1>
    </div>
  );
}

// const Welcomes = () => {
//   return (
//     <div>
//       <h1>Hello {props.name}🥳🥳😀😀</h1>
//     </div>
//   );
// };

//JSX - JS XML

// custom component
// 1. First letter must be captial
// 2. It returns a JSX element
// component declaration
//{} - template syntax
//class in JS - reserved  keyword
// SPA - index.html only one - public folder
// JSX  - Javascript XML / extended
// JSX -> converted to Javascript
//Webpack + babel  -  React code
// props - object

function Home() {
  return <div>Hey🥳🥳🥳😀😀</div>;
}

//Hooks - function
//useState - hook
//const [state, setState] = useState(initialValue)
//state - state of art of technology, state of mind

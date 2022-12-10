import "./App.css";

export default function App() {
  //Js starts
  // const name = "Harish";
  // const name1 = "Rahul";
  //JS ends
  //JSX starts
  return (
    <div className="App">
      {/* <h1>{name}</h1> */}
      {/* <Welcome name="Harish" />
      <Welcome name="Rahul" /> */}
      {/* <Home /> */}
      <Msg
        name="Harish"
        pic="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <Msg
        name="Rahul"
        pic="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <Msg
        name="Bhuva"
        pic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg"
      />
    </div>
  );
  //JSX ends
}

function Msg(props) {
  return (
    <div>
      <img className="profile-pic" src={props.pic} alt="profile" />
      <h1>Hi, {props.name}</h1>
    </div>
  );
}

function Welcome(props) {
  return (
    <div>
      <h1>Hello {props.name}🥳🥳😀😀</h1>
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

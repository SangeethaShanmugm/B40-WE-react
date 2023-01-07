import { Msg } from "./Msg";

export function Users() {
  const users = [
    {
      name: "john",
      pic: "pic",
    },
    {
      name: "jack",
      pic: "pic2",
    },
  ];
  return (
    <div>
      {users.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
}

import { useState } from "react";

//task - create a dislike button
export function Counter() {
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

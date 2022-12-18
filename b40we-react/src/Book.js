import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";

export function Book({ book, id }) {
  // conditional styling
  //true - visible
  //false- hide
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  // const styles = {
  //   color: book.rating > 8 ? "green" : "red",
  //   fontSize: "24px",
  // };
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-spec">
        <h2 className="book-name">
          {book.name} - {id}
        </h2>
        <p className="book-rating">⭐{book.rating}</p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle Summary</button>
      <button onClick={() => navigate("/book/" + id)}>Info</button>
      {/* <p style={summaryStyles} className="book-summary">
        {book.summary}
      </p> */}
      {/* conditional rendering */}
      {show ? <p className="book-summary"> {book.summary}</p> : ""}
      <Counter />
    </div>
  );
}

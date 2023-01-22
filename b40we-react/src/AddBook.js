import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

// Task - 20 mins
// /book/add - <AddBook/>
// Add Book --> book added -> /book (book list page)
export function AddBook() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  return (
    <div className="add-book-form">
      <TextField
        onChange={(event) => setName(event.target.value)}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        placeholder="Enter a name"
      />
      <TextField
        onChange={(event) => setPoster(event.target.value)}
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        placeholder="Enter a poster"
      />
      <TextField
        onChange={(event) => setRating(event.target.value)}
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        placeholder="Enter a rating"
      />
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        placeholder="Enter a summary"
      />
      <TextField
        onChange={(event) => setTrailer(event.target.value)}
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        placeholder="Enter a Trailer"
      />
      <Button
        variant="contained"
        onClick={() => {
          const newBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          //1. method - POST
          // 2. body - data - JSON
          //3. Headers - JSON
          // setBookList([...bookList, newBook]);
          // console.log(bookList, newBook);
          //copy the bookList and add new book
          fetch(`${API}/books`, {
            method: "POST",
            body: JSON.stringify(newBook),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/book"));
        }}
      >
        Add Book
      </Button>
    </div>
  );
}

import { useState, useEffect } from "react";

import { Button, TextField } from "@mui/material";
import { API } from "./global";
import { useNavigate, useParams } from "react-router-dom";

export function EditBook() {
  const { bookid } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bk) => setBook(bk));
  }, []);

  return book ? <EditBookForm book={book} /> : "Loading...";
}

function EditBookForm({ book }) {
  const [name, setName] = useState(book.name);
  const [poster, setPoster] = useState(book.poster);
  const [rating, setRating] = useState(book.rating);
  const [summary, setSummary] = useState(book.summary);
  const [trailer, setTrailer] = useState(book.trailer);

  const navigate = useNavigate();

  return (
    <div className="add-book-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        placeholder="Enter a name"
      />
      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        placeholder="Enter a poster"
      />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        placeholder="Enter a rating"
      />
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        placeholder="Enter a summary"
      />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        placeholder="Enter a Trailer"
      />
      <Button
        variant="contained"
        onClick={() => {
          const updatedBook = {
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
          fetch(`${API}/books/${book.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedBook),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/book"));
        }}
      >
        SAVE
      </Button>
    </div>
  );
}

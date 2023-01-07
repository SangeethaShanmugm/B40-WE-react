import { Book } from "./Book";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function BookList({ bookList, setBookList }) {
  // const bookList = INITIAL_BOOK_LIST;
  // const [bookList, setBookList] = useState(INITIAL_BOOK_LIST);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  return (
    <div>
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

            setBookList([...bookList, newBook]);
            console.log(bookList, newBook);
            //copy the bookList and add new book
          }}
        >
          Add Book
        </Button>
      </div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
}

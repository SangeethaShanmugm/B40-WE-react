import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { API } from "./global";
export function BookDetail() {
  const { bookid } = useParams();
  const [book, setBook] = useState({});

  // const book = bookList[bookid];
  // console.log("bookList", book);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bk) => setBook(bk));
  }, []);

  return (
    <div>
      <iframe
        width="100%"
        height="550"
        src={book.trailer}
        title="The Power of Your Subconscious Mind (1963) by Joseph Murphy"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="book-detail-container">
        <div className="book-spec">
          <h2 className="book-name">{book.name}</h2>
          <p className="book-rating">⭐{book.rating}</p>
        </div>

        <p className="book-summary"> {book.summary}</p>

        <Button
          onClick={() => navigate(-1)}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}

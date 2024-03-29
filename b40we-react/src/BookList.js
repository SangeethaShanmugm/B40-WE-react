import { useState, useEffect } from "react";
import { Book } from "./Book";
import { API } from "./global";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  const [bookList, setBookList] = useState([]);

  const getBook = () => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bks) => setBookList(bks));
  };
  useEffect(() => getBook(), []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book
            key={bk.id}
            book={bk}
            id={bk.id}
            deleteButton={
              <IconButton
                color="error"
                onClick={() =>
                  fetch(`${API}/books/${bk.id}`, {
                    method: "DELETE",
                  }).then(() => getBook())
                }
              >
                <DeleteIcon />
              </IconButton>
            }
            editbutton={
              <IconButton color="secondary" onClick={() => navigate(`/book/edit/${bk.id}`)}>
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}

//Task - delete fetch call  - id -  15 mins

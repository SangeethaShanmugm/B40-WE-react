import { useState, useEffect } from "react";
import { Book } from "./Book";
import { API } from "./global";
export function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((bks) => setBookList(bks));
  }, []);

  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={bk.id} book={bk} id={bk.id} />
        ))}
      </div>
    </div>
  );
}

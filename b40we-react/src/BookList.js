import { Book } from "./Book";


export function BookList({ bookList, setBookList }) {
  // const bookList = INITIAL_BOOK_LIST;
  // const [bookList, setBookList] = useState(INITIAL_BOOK_LIST);

  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
}

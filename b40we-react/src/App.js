import "./App.css";
import { AddColor } from "./AddColor";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Users } from "./Users";
import { Home } from "./Home";
import { BookList } from "./BookList";
import { BookDetail } from "./BookDetail";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NotFoundPage } from "./NotFoundPage";
import { AppBar, Button, Toolbar } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { AddBook } from "./AddBook";
import { EditBook } from "./EditBook";
import { BasicForm } from "./BasicForm";
import { Example } from "./Example";

//const INITIAL_BOOK_LIST = [
//   {
//     name: "Charlotte's web",
//     poster:
//       "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
//     rating: 8.8,
//     summary:
//       "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
//   },
//   {
//     name: "The power of your subconscious mind",
//     poster:
//       "https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
//     rating: 7,
//     summary:
//       "Your subconscious mind is a powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
//     trailer: "https://www.youtube.com/embed/Solb9uA-tgQ",
//   },
//   {
//     name: "Attitude is everything ",
//     poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
//     rating: 8.1,
//     summary:
//       "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
//   },
//   {
//     name: "The Secret",
//     poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
//     summary:
//       "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
//     rating: 8.8,
//   },
//   {
//     name: "Discover Your Destiny",
//     rating: 6,
//     summary:
//       "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
//     poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
//   },
//   {
//     name: "The 5 AM Club",
//     poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
//     rating: 8.6,
//     summary:
//       "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
//   },
//   {
//     name: "Atomic Habits",
//     poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
//     rating: 8,
//     summary:
//       "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
//   },
//   {
//     name: "I Can Do It",
//     poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
//     rating: 8,
//     summary:
//       "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations.",
//   },
// ];

export default function App() {
  //Lifting the state up -> Lifting from child to parent
  const [bookList, setBookList] = useState([]);

  //1. creating  - createContext -✅
  // 2. Publisher - provider - context.Provider ✅
  // 3. Subscriber - useContext  - useContext(context)
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/book")}>
              BookList
            </Button>
            <Button color="inherit" onClick={() => navigate("/book/add")}>
              Add Book
            </Button>
            <Button color="inherit" onClick={() => navigate("/add-color")}>
              AddColor
            </Button>
            <Button color="inherit" onClick={() => navigate("/users")}>
              Users
            </Button>
            <Button color="inherit" onClick={() => navigate("/basic-form")}>
              Basic Form
            </Button>
            <Button color="inherit" onClick={() => navigate("/example")}>
              Example Context
            </Button>

            <Button
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? "dark" : "light"} Mode
            </Button>
            {/* <nav>
          <ul>
            <li>
              Link change page without refresh
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/book">BookList</Link>
            </li>
            <li>
            <Link to="/book/add">Add Book</Link>
          </li>
            <li>
              <Link to="/add-color">AddColor</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/somewhere">Somewhere</Link>
            </li>
          </ul>
        </nav> */}
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookList />} />
          <Route path="/book/:bookid" element={<BookDetail />} />
          <Route path="/book/add" element={<AddBook />} />
          <Route path="/book/edit/:bookid" element={<EditBook />} />

          {/* <Route path="/book/add" element={<AddBook />} /> */}
          <Route path="/add-color" element={<AddColor />} />
          <Route path="/users" element={<Users />} />
          <Route path="/novel" element={<Navigate replace to="/book" />} />
          <Route path="/basic-form" element={<BasicForm />} />
          <Route path="/example" element={<Example />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

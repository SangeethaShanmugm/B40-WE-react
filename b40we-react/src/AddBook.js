import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

//Task - 15 mins
//name -required
//poster - min 4, required
//rating -1 -10 - required
//summary - min 20, required
//trailer - min 4, required

const bookValidationSchema = yup.object({
  name: yup.string().required("Why not fill the name"),
  poster: yup
    .string()
    .min(4, "Need a longer poster")
    .required("Why not fill the poster"),
  rating: yup
    .number()
    .min(1, "Need a higher rating")
    .max(10, "Too much rating")
    .required("Why not fill the rating"),
  summary: yup
    .string()
    .min(20, "Need a longer summary")
    // .max(300, "Too much summary")
    .required("Why not fill the summary"),
  trailer: yup
    .string()
    .min(20, "Need a longer trailer")
    .required("Why not fill the trailer"),
});
export function AddBook() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: bookValidationSchema,
    onSubmit: (newBook) => {
      // console.log("onSubmit", newBook);
      createBook(newBook);
    },
  });

  const navigate = useNavigate();

  const createBook = (newBook) => {
    console.log("createBook", newBook);

    fetch(`${API}/books`, {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => navigate("/book"));
  };

  return (
    <form onSubmit={formik.handleSubmit} className="add-book-form">
      <TextField
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        placeholder="Enter a name"
      />
      {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
      <TextField
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="poster"
        name="poster"
        label="Poster"
        variant="outlined"
        placeholder="Enter a poster"
      />
      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}
      <TextField
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="rating"
        name="rating"
        label="Rating"
        variant="outlined"
        placeholder="Enter a rating"
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}
      <TextField
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="summary"
        name="summary"
        label="Summary"
        variant="outlined"
        placeholder="Enter a summary"
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""}
      <TextField
        value={formik.values.trailer}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="trailer"
        name="trailer"
        label="Trailer"
        variant="outlined"
        placeholder="Enter a Trailer"
      />
      {formik.touched.trailer && formik.errors.trailer
        ? formik.errors.trailer
        : ""}
      <Button
        type="submit"
        variant="contained"
        onClick={createBook}
        // onClick={() => {
        //   const newBook = {
        //     name: name,
        //     poster: poster,
        //     rating: rating,
        //     summary: summary,
        //     trailer: trailer,
        //   };
        //   //1. method - POST
        //   // 2. body - data - JSON
        //   //3. Headers - JSON
        //   // setBookList([...bookList, newBook]);
        //   // console.log(bookList, newBook);
        //   //copy the bookList and add new book
        //   fetch(`${API}/books`, {
        //     method: "POST",
        //     body: JSON.stringify(newBook),
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   })
        //     .then((data) => data.json())
        //     .then(() => navigate("/book"));
        // }}
      >
        Add Book
      </Button>
    </form>
  );
}

import { useFormik } from "formik";

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        type="email"
        placeholder="Enter email"
      />
      <input
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password"
        placeholder="Enter password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup.string().min(5, "Need a longer email"),
  password: yup
    .string()
    .min(8, "Need a longer password🥳")
    .max(12, "Too much password😉")
    .required("Why not fill this password"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
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
      <br />
      {formik.errors.email}
      <br />
      <input
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password"
        placeholder="Enter password"
      />
      <br />
      {formik.errors.password}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

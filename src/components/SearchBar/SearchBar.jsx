import toast, { Toaster } from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    search: "",
  };

  const handleSubmit = (values, options) => {
    if (values.search.trim() === "") {
      return toast.error("Enter some query, please!", {
        duration: 3000,
        position: "top-right",
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#cefa70",
          background: "#f8994d",
        },
      });
    }
    onSubmit(values.search);
    options.resetForm();
  };

  const validationSchema = Yup.object().shape({
    search: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  });

  return (
    <header className={s.header}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            name="search"
            autoComplete="off"
            type="text"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="search" component="div" />
          <button className={s.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
};

export default SearchBar;

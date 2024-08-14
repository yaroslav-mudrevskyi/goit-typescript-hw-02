import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    search: "",
  };

  const handleSubmit = (values, options) => {
    onSubmit(values.search);
    options.resetForm();
  };

  const validationSchema = Yup.object().shape({
    search: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("The field is required"),
  });

  return (
    <header>
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
    </header>
  );
};

export default SearchBar;

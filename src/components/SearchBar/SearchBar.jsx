import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

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
        <Form>
          <Field
            name="search"
            autocomplete="off"
            type="text"
            autofocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="search" component="div" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;

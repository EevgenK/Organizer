import { Field, Form, Formik } from "formik";
import s from "./TodoList.module.css";

const AddForm = () => {
  const initialValues = { text: "" };
  const onSubmit = (values) => {
    const newTodo = {
      text: values.text,
      completed: false,
    };
  };
  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name="text" placeholder="Enter new todo" />
          <button type="submit">Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddForm;

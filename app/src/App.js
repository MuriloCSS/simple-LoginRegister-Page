import './App.css';
import{Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

function App() {

  const handleClickLogin = (values) => console.log(values)

  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email").required("*Campo obrigatório"),
    password: yup.string().min(8, "Min. 8 caracteres").required("*Campo obrigatório"),
  });

  return (
    <div className="container">
     <h1>Login</h1>
     <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
      <Form className='login-form'>
        <div className='login-form-group'>
          <Field name="email" className="form-field" placeHolder="Email" />
          <ErrorMessage component="span"
          name="email"
          className='form-error'/>
        </div>
        <div className='login-form-group'>
          <Field name="password" className="form-field" placeHolder="Senha" />
          <ErrorMessage component="span"
          name="password"
          className='form-error'/>
        </div>
        <button className='button' type='submit'>Login</button>

      </Form>
     </Formik>
    </div>
  );
}

export default App;

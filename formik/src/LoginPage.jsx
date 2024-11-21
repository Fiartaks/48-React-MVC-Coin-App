import { useFormik } from "formik";
import { schema } from "./schema";
import InputField from "./InputField";
import { inputs } from "./constant";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password:'',
      confirmPassword: '',
    },

    //!her seyi zorunluluklari
    validationSchema: schema,

    //formdaki verileri alir
    //formda calisan aksiyonlari alir
    onSubmit: (values, actions) => {
      console.log(actions);
    },
  });

  return (
    <div className="login-page">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/c-logo.png" alt="logo" />
          <span>Mania</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <InputField key={data.id} formik={formik} data={data} />
          ))}

          <button>Gonder</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

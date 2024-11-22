import { useFormik } from "formik";
import { schema } from "../schema";
import LoginPageView from "../views/LoginPageView";

const LoginPageController = () => {

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
    <LoginPageView formik={formik}  />
  )
}
export default LoginPageController
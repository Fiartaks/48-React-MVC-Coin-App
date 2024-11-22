import InputFieldView from "./InputFieldView";
import { inputs } from "../constant";


const LoginPageView = ({formik}) => {
  return (
  
    <div className="login-page text-decoration-none">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items-center ">
          <img height={60} src="/c-logo.png" alt="logo" />
          <span >Mania</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <InputFieldView key={data.id} formik={formik} data={data} />
          ))}

          <button>Gonder</button>
        </form>
      </div>
    </div>

)
}

export default LoginPageView
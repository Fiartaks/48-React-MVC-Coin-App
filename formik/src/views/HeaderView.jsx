import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header className="d-flex justify-content-between p-3 align-items-center">
      <Link className="d-flex gap-3 align-items-center text-decoration-none " to={"/home"}>
        <img height={40} src="/c-logo.png" />
        <h3 className="text-light ">CoinMania</h3>
      </Link>

      <nav className="d-flex gap-3">
        <NavLink className="text-decoration-none" to={"/"}>Giris</NavLink>
        <NavLink className="text-decoration-none" to={"/home"}>Anasayfa</NavLink>
      </nav>
    </header>
  );
};
export default HeaderView;

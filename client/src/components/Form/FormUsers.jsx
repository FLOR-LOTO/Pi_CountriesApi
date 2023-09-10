import style from "./FormUsers.module.css";
import { Link } from "react-router-dom";

const FormUsers = () => {
  return (
    <div className={style.div}>
      <form className={style.form}>
        <h1 className={style.titulo}>
          {" "}
          Registráte y disfruta de una gran experiencia{" "}
        </h1>

        <label className={style.label}>Email</label>

        <input
          className={style.input}
          type="text"
          name="email"
          placeholder="ingrese su email..."
        ></input>

        <label className={style.label}>Password</label>

        <input
          className={style.input}
          type="password"
          name="password"
          placeholder="contraseña..."
        ></input>

        <button className={style.register}>Registrarme</button>

        <Link to="/countries">
          <button className={style.btn}>Ingresar sin registrarme</button>
        </Link>
      </form>
    </div>
  );
};

export default FormUsers;

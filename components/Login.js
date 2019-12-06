import Link from "next/link";

const Login = () => (
  <section id="login" className="columns is-centered is-vcentered is-mobile">
    <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd">
      <form action="" className="box">
        <div className="field">
          <label htmlFor="" className="label">
            Correo
          </label>
          <div className="control has-icons-left">
            <input
              type="email"
              placeholder="username@laboratoria.la"
              className="input"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Contraseña
          </label>
          <div className="control has-icons-left">
            <input
              type="password"
              placeholder="**********"
              className="input"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label htmlFor="" className="checkbox">
            <input type="checkbox" />
            Recordarme
          </label>
        </div>
        <div className="field has-text-centered">
          <Link href="/home">
            <button className="button is-success is-rounded">Login</button>
          </Link>
        </div>
      </form>
    </div>
    <style jsx>{``}</style>
  </section>
);

export default Login;

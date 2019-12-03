const Splash = props => (
  <section
    id="splash"
    className={
      props.scrolled === 0
        ? "splash is-bg-purple view"
        : "splash is-bg-purple view hide"
    }
  >
    <figure className=" level-item image logo">
      <img className="logo" src="/assets/runa-white.png" alt="logo" />
    </figure>
    <style jsx>
      {`
        .splash {
          padding-top: 40vh;
        }
        .logo img {
          width: 8rem;
          height: auto;
          top: 50hv;
        }
      `}
    </style>
  </section>
);

export default Splash;
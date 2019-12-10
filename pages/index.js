import { Component } from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";

import Login from "../components/Login";

const Splash = ({ load }) => (
  <Fade big cascade>
  <div
    id="splash"
    className={
      load ? " splash is-bg-purple view hide" : " splash is-bg-purple view"
    }
  >
    <figure className=" level-item image logo">
      <img className="logo" src="/assets/runa-white.png" alt="logo" />
    </figure>
    <style jsx>
      {`
        .splash {
          padding-top: 40vh;
          transition: all 5s ease-out;
        }
        .logo img {
          width: 8rem;
          height: auto;
          top: 50hv;
        }
      `}
    </style>
    </div>
    </Fade>
);

class Index extends Component {
  state = {
    load: ""
  };

  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
   // window.addEventListener("scroll", this.handleScroll, true);
    this.setState({
      load: false
    });
  }

  handleLoad = () => {
    setTimeout(
      this.setState({
        load: true
      }),
      3000
    );
  };

  handleScroll = () => {
    setTimeout(
      this.setState({
        load: true
      }),
      300
    );
  };

  render() {
    const { load } = this.state;
    return (
      <section>
        <Splash load={load} />
        <Fade right>
          <section id="index" className="container view">
            <Head>
              <title>Runa | Performance Evaluation</title>
            </Head>
            <section className="hero">
              <div className="hero-body">
                <div className="container">
                  <h3 className="title is-3">¡Hola!</h3>
                  <br />
                  <h4 className="subtitle is-4">
                    Bienvenid@ a tu proceso de crecimiento
                  </h4>
                </div>
              </div>
            </section>
            <Login />
          </section>
        </Fade>
        <style jsx>{``}</style>
      </section>
    );
  }
}

export default Index;

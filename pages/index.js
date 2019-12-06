import { Component } from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";

import Splash from "../components/Splash";
import Login from "../components/Login";

class Index extends Component {
  state = {
    scrolled: ""
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.setState({
      scrolled: 0
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrolled: window.deltaY
    });
  };

  render() {
    const { scrolled } = this.state;
    return (
      <div>
        <Splash scrolled={scrolled} />
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
        <style jsx>
          {`

          `}
        </style>
      </div>
    );
  }
}

export default Index;

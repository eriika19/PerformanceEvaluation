import { Component } from "react";
import Head from "next/head";

import Splash from "../components/Splash";
import Login from "../components/Login";


class Index extends Component {


  render() {

    return (
      <div>
        <Splash />
        <section id="index" className="container view">
          <Head>
            <title>Runa | Performance Evaluation</title>
          </Head>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h3 className="title is-3">
                  ¡Hola!
                </h3>
                <br/>
                <h4 className="subtitle is-4">
                  Bienvenid@ a tu proceso de crecimiento
                </h4>
              </div>
            </div>
          </section>
          <Login />
        </section>
        <style jsx global>
          {`

          `}
        </style>
      </div>
    );
  }
}

export default Index;

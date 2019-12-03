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
          <section class="hero">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Hola, bienvenid@ a tu proceso de crecimiento
                </h1>
                <h2 class="subtitle">
                  Hola, bienvenid@ a tu proceso de crecimiento
                </h2>
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

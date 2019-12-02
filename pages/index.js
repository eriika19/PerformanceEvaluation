import React, { Component } from "react";
import Head from "next/head";

class Home extends Component {


  render() {

    return (
      <section id="home">
        <Head>
          <title>Runa | Performance Evaluation</title>
        </Head>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Primary bold title</h1>
              <h2 className="subtitle">Primary bold subtitle</h2>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Home;

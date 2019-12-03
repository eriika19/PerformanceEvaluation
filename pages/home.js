import { Component } from "react";
import Head from "next/head";
//import Link from "next/link";

import User from "../components/User";
import QuestionBtn from "../components/QuestionBtn";


class Home extends Component {

  render() {
    const user = "Elizabeth P.";
    const id = 0;

    return (
      <section id="home" className="container">
        <Head>
          <title>Runa | Performance Evaluation</title>
        </Head>
        <section className="hero">
          <User user={user} thumbnail="/assets/Lizzie.jpg" />
          <div className="hero-body">
            <div className="container">
              <h1 className="title">¡Hola {user}! </h1>
              <h2 className="subtitle">¿Estás listx para comenzar?</h2>
            </div>
          </div>
        </section>
        <QuestionBtn text="Comenzar" id={(id+1)} />
      </section>
    );
  }
}

export default Home;

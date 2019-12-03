import { Component } from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";
//import Link from "next/link";

import Layout from "../components/Layout";
import User from "../components/User";
import QuestionBtn from "../components/QuestionBtn";

class Home extends Component {
  render() {
    const user = "Elizabeth";
    const role = "Front-End Coach";
    const thumbnail = "/assets/Lizzie.jpg";
    const id = 0;

    return (
      <Layout>
        <Fade right>        
        
        <section id="home" className="container">
          <Head>
            <title>Runa | Performance Evaluation</title>
          </Head>
          <section className="hero">
            <User user={user} thumbnail={thumbnail} role={role} />
            <div className="hero-body">
              <div className="container">
                <h1 className="title">¡Hola {user}! </h1>
                <h2 className="subtitle">¿Estás listx para comenzar?</h2>
              </div>
            </div>
          </section>
          <QuestionBtn text="Ir a encuesta" id={id + 1} />
          </section>
        </Fade>        
          
      </Layout>
    );
  }
}

export default Home;

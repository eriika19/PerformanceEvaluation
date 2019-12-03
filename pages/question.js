import { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
//import Fade from "react-reveal/Fade";

//import Oops from "../components/Oops";
import Layout from "../components/Layout";
import User from "../components/User";
import QuestionBtn from "../components/QuestionBtn";
//import questionsData from "../data/questions";

class QuestionPage extends Component {
  render() {
    const { id, question } = this.props;
    const nextID = parseInt(id, 10) + 1;

    const user = "Elizabeth";
    const role = "Front-End Coach";
    const thumbnail = "/assets/Lizzie.jpg";

    return question ? (
      <Layout>
        <section id="interview" className="container">
          <Head>
            <title>Runa | Interview</title>
          </Head>
          <section className="hero">
            <User user={user} thumbnail={thumbnail} role={role} />
            <div className="hero-body">
              <div className="container">
                <h1 className="title"> Pregunta {id}</h1>
                <h2 className="subtitle">{question}</h2>
              </div>
            </div>
          </section>
          <section className="columns">
            <div className="column">Puede mejorar</div>
            <div className="column">Me parece bueno</div>
            <div className="column">Esta es mi habilidad destacada</div>
          </section>
          <QuestionBtn text="Siguiente" id={nextID} />
        </section>
      </Layout>
    ) : (
      <Layout>
        <section id="interview" className="container">
          <Head>
            <title>Runa | Interview</title>
          </Head>
          <section className="hero">
            <User user="" thumbnail="/assets/Lizzie.jpg" />
            <div className="hero-body">
              <div className="container">
                <h1 className="title"> ¡Genial!</h1>
                <h2 className="subtitle">
                  Esto es lo que has mejorado este año
                </h2>
              </div>
            </div>
          </section>
          <section className="columns">
            <div className="column">Actuamos como owners</div>
            <div className="column">Aspiramos a la experiencia</div>
            <div className="column">Jugamos en equipo</div>
          </section>
          <section className="columns">
            <div className="column">Experimentamos constantemente</div>
            <div className="column">Tenemos libertad con responsabilidad</div>
          </section>
          <div className="field has-text-centered">
            <Link href="/suggest">
              <button className="button is-succes is-outlined is-rounded">
                Continuar
              </button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }
}

QuestionPage.getInitialProps = async ({ query: { id } }) => {
  const index = parseInt(id, 10) - 1;

  const res = await fetch("https://sheetsu.com/apis/v1.0su/fdf10260eb2b");
  const data = await res.json();

  if (data[index] !== undefined) {
    const { question } = data[index];
    return {
      question,
      id
    };
  } else {
    return {
      id
    };
  }
};

export default QuestionPage;

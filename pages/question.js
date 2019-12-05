import { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Fade from "react-reveal/Fade";
import "hover.css/css/hover-min.css";


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
        <Fade top>
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
            <section className="columns level">
              <div className="column level-item">
                <div className="hvr-grow">
                  <figure className=" icon is-large">
                    <img className="" src="/assets/1.png" alt="point" />
                  </figure>
                  <p className="">Puedo mejorar</p>
                </div>
              </div>
              <div className="column level-item">
                <div className="hvr-grow">
                  <figure className=" icon is-large">
                    <img className="" src="/assets/2.png" alt="point" />
                  </figure>
                  <p className="">Soy bueno</p>
                </div>
              </div>
              <div className="column level-item">
                <div className="hvr-grow">
                  <figure className=" icon is-large">
                    <img className="" src="/assets/3.png" alt="point" />
                  </figure>
                  <p className="">
                    Esta es mi <br />
                    habilidad
                    <br /> destacada
                  </p>
                </div>
              </div>
            </section>
            <QuestionBtn text="Siguiente" id={nextID} />
          </section>
        </Fade>
        <style jsx global>
          {`
            .columns {
              width: 100%;
              min-height: 22vh;
            }
            .column {
              align-items: center;
              justify-content: center;
              text-align: center;
            }
            .hvr-grow {
              transition: all 0.3s ease-out;
              border-radius: 58px;
              min-width: 8.5rem;
              padding: 1rem;
            }
            .hvr-grow:focus:not(:active) {
              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
            }
            .hvr-grow:hover {
              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
            }
          `}
        </style>
      </Layout>
    ) : (
      <Layout>
        <Fade left>
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
            <section className="columns level">
              <div className="column level-item">
                <div className="">
                  <figure className=" icon is-large">
                    <img className="" src="/assets/circle-hi.png" alt="point" />
                  </figure>
                  <p className="">Actuamos como owners</p>
                </div>
              </div>
              <div className="column level-item">
                <div className="">
                  <figure className=" icon is-large">
                    <img className="" src="/assets/circle-hi.png" alt="point" />
                  </figure>
                  <p className="">Jugamos en equipo</p>
                </div>
              </div>
              <div className="column level-item">
                <div className="">
                  <figure className=" icon is-large">
                    <img className="" src="/assets/circle-hi.png" alt="point" />
                  </figure>
                  <p className="">Aspiramos a la excelencia</p>
                </div>
              </div>
            </section>
            <section className="columns level">
              <div className="column level-item">
                <div className="">
                  <figure className=" icon is-large">
                    <img className="" src="/assets/circle-vi.png" alt="point" />
                  </figure>
                  <p className="">Experimentamos constantemente</p>
                </div>
              </div>
              <div className="column level-item">
                <div className="">
                  <figure className=" icon is-large">
                    <img className="" src="/assets/circle-vi.png" alt="point" />
                  </figure>
                  <p className="">Tenemos libertad con responsabilidad</p>
                </div>
              </div>
            </section>
            <div className="field has-text-centered">
              <Link href="/suggest">
                <button className="button is-succes is-outlined is-rounded">
                  Continuar
                </button>
              </Link>
            </div>
          </section>
        </Fade>
        <style jsx global>
          {`
            .columns {
              width: 100%;
              min-height: 22vh;
            }
            .column {
              align-items: center;
              justify-content: center;
              text-align: center;
            }
          `}
        </style>
      </Layout>
    );
  }
}

QuestionPage.getInitialProps = async ({ query: { id } }) => {
  const index = parseInt(id, 10) - 1;

  const res = await fetch("https://sheetsu.com/apis/v1.0su/a25c2c2fd334");
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

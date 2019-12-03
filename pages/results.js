import { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
//import Fade from "react-reveal/Fade";

//import Oops from "../components/Oops";
import User from "../components/User";
import Dashboard from "../components/Dashboard";

class ResultsPage extends Component {
  render() {
    return (
      <section id="interview" className="container">
        <Head>
          <title>Runa | Results</title>
        </Head>
        <section className="hero">
          <User user="" thumbnail="/assets/Lizzie.jpg" />
          <div className="hero-body">
            <div className="container">
              <h1 className="title"> Resultados</h1>
              <h2 className="subtitle"></h2>
            </div>
          </div>
        </section>
<Dashboard/>
      </section>
    )
  }
}


export default ResultsPage;

import { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Fade from "react-reveal/Fade";

//import Oops from "../components/Oops";
import Layout from "../components/Layout";

//import User from "../components/User";
import Dashboard from "../components/Dashboard";

class ResultsPage extends Component {
  render() {
    return (
        <Layout>
        <Fade big cascade>        
            
        <section id="interview" className="container">
          <Head>
            <title>Runa | Results</title>
          </Head>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title"> Gráfica de evaluación</h1>
                <h2 className="subtitle"></h2>
              </div>
            </div>
          </section>
          <Dashboard />
                </section>
        </Fade>        
                
      </Layout>
    );
  }
}

export default ResultsPage;

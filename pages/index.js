import { Component } from "react";
import Head from "next/head";

import Login from "../components/Login";


class Index extends Component {


  render() {

    return (
      <section id="index" className="container">
        <Head>
          <title>Runa | Performance Evaluation</title>
        </Head>
<Login/>
      </section>
    );
  }
}

export default Index;

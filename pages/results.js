import { Component } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Fade from "react-reveal/Fade";

import Layout from "../components/Layout";

import Dashboard from "../components/Dashboard";

class ResultsPage extends Component {
  state = {
    data: null,
    searchName: null
  };

  loadData = async () => {
    const res = await fetch("https://sheetsu.com/apis/v1.0su/fad3bddabbe3");
    const externalData = await res.json();

    return externalData;
  };

  getColaborator = async search => {
    const externalData = await this.loadData();

    const filterData = externalData.filter(
      filter =>
        filter.name.toLowerCase().indexOf(search) !== -1 ||
        filter.id.indexOf(search) !== -1
    );

    if (filterData.length === 1) {
      return filterData;
    } else {
      return false;
    }
  };

  getData = async search => {
    let arg = "";
    if (typeof search === "string") {
      arg = search.toLowerCase();
    } else {
      arg = search;
    }
    const filterData = await this.getColaborator(arg);

    if (filterData) {
      const {
        name,
        Colaboración,
        Liderazgo,
        Innovación,
        Responsabilidad,
        Creatividad
      } = filterData[0];

      const data = [
        ["2019", "Jul - Dic", { role: "style" }],
        ["Colaboración", parseInt(Colaboración, 10), 'stroke-color: #f5a623; stroke-opacity: 0.8; stroke-width: 4; fill-color: #7a6ff0; fill-opacity: 0.65'],
        ["Liderazgo", parseInt(Liderazgo, 10), 'stroke-color: #f5a623; stroke-opacity: 0.8; stroke-width: 4; fill-color: #7a6ff0; fill-opacity: 0.65'],
        ["Innovación", parseInt(Innovación, 10), 'stroke-color: #f5a623; stroke-opacity: 0.8; stroke-width: 4; fill-color: #7a6ff0; fill-opacity: 0.65'],
        ["Responsabilidad", parseInt(Responsabilidad, 10), 'stroke-color: #f5a623; stroke-opacity: 0.8; stroke-width: 4; fill-color: #7a6ff0; fill-opacity: 0.65'],
        ["Creatividad", parseInt(Creatividad, 10), 'stroke-color: #f5a623; stroke-opacity: 0.8; stroke-width: 4; fill-color: #7a6ff0; fill-opacity: 0.65']
      ];

      return { data, name };
    } else {
      return false;
    }
  };

  handleChange = async e => {
    if (e.target.value.length > 0) {
      const result = await this.getData(e.target.value);
      if (result) {
        const { data, name } = result;

        this.setState({
          searchName: name,
          data: data
        });
      }
      if (!result) {
        this.setState({
          searchName: false,
          data: false
        });
      }
    } else {
      this.setState({
        searchName: null,
        data: null,
      });
    }
  };

  render() {
    return (
      <Layout>
        <Fade big cascade>
          <section id="interview" className="container">
            <Head>
              <title>Runa | Results</title>
            </Head>
            <section className="hero">
              <input
                className="input is-rounded"
                type="text"
                placeholder="Buscar laboratorian"
                onChange={this.handleChange}
              ></input>
              <div className="hero-body">
                <div className="container">
                  <h2 className="subtitle"></h2>
                </div>
              </div>
            </section>
            <Dashboard data={this.state.data} name={this.state.searchName} />
          </section>
        </Fade>
      </Layout>
    );
  }
}

export default ResultsPage;

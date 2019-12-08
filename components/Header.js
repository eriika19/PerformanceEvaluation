import { Component } from "react";
import Router from "next/router";
import Head from "next/head";
import "bulma-pageloader/dist/css/bulma-pageloader.min.css";


class Header extends Component {
  state = { loading: false };

  componentDidMount() {
    Router.onRouteChangeStart = () => {
      this.setState({ loading: true });
    };
    Router.onRouteChangeComplete = () => {
      this.setState({ loading: false });
    };
    Router.onRouteChangeError = () => {
      this.setState({ loading: false });
    };
  }

  render() {
    return (
      <section id="header">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Performance Evaluation" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#8378f4" />
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="manifest" href="/_next/static/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Loader loading={this.state.loading} />
        <style jsx global>
          {`
            .pageloader.is-active {
              background-color: #8378f4;
              color: #fff;
            }
          `}
        </style>
      </section>
    );
  }
}

const Loader = ({ loading }) => (
  <div className={loading ? "pageloader is-active" : "pageloader"}><span className="title">Cargando</span></div>
);

export default Header;

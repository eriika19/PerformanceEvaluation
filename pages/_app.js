import App from "next/app";
import "bulma/css/bulma.min.css";
import "hover.css/css/hover-min.css";
import "bulma-pageloader/dist/css/bulma-pageloader.min.css";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false;

import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
//import { fab } from "@fortawesome/free-brands-svg-icons";

library.add( faEnvelope, faLock );

import Header from "../components/Header";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <section>
        <Header />
        <Component {...pageProps} />
        <style jsx global>
          {`
            body {
              font-family: "Varela Round", sans-serif;
            }
            .view {
              height: 100vh;
            }
            .hide {
              display: none;
            }
            .is-purple {
              color: #8378f4;
            }
            .is-bg-purple {
              background-color: #8378f4;
            }
            .is-bg-aqua {
              backcolor: #64f4d9;
            }
            html.has-navbar-fixed-top {
              padding-top: 8rem;
            }
            .button {
              border-width: 0.12rem;
            }
            .is-bg-orange {
              background-color: #8378f4;
              color: #fff;
            }
          `}
        </style>
      </section>
    );
  }
}

export default MyApp;
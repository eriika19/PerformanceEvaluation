import App from "next/app";
import { register, unregister } from 'next-offline/runtime'
import Link from "next/link";
import "bulma/css/bulma.min.css";

import OfflineSupport from "../components/OfflineSupport";
import Header from "../components/Header";


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    register();
  }
  componentWillUnmount() {
    unregister();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Header />
        <OfflineSupport />
        <Component {...pageProps} />
        <style global jsx>
          {`
            body {
              font-family: "Quicksand", sans-serif;
              font-weight: 500 !important;
            }
          `}
        </style>
      </div>
    );
  }
}

export default MyApp;
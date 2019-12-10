import { Component } from "react";
import Router from "next/router";

import Nav from "./Nav";

class Layout extends Component {
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
    const { loading } = this.state;
    const { children } = this.props;

    const Loader = ({ loading }) => (
        <div
          className={
            loading
              ? "pageloader is-bg-orange is-left-to-right container is-active"
              : "pageloader is-bg-orange is-left-to-right container"
          }
        >
          <span className="title">Cargando</span>
        </div>
      );

    return (
      <section className="has-padding-top section">
        <Nav />
        {children}
        <Loader loading={loading} />
        <style>
          {`
        .has-padding-top {
            padding-top: 8.2rem;
        }
        `}
        </style>
      </section>
    );
  }
}

export default Layout;

import React from "react";

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <section className="container has-text-centered is-centered is-vcentered">
        <p>
          <span>
            {statusCode ? (
              <span>
                A server error occurred: <b>{this.props.statusCode}.</b>
              </span>
            ) : (
              "We encountered an error loading this page. "
            )}
            Please try again later.
          </span>
        </p>
      </section>
    );
  }
}

export default Error;

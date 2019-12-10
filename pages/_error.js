//import React from "react";

const errorPage = ({ statusCode }) => (
  <section className="section has-text-centered is-centered is-vcentered">
    <p>
      <span>
        {statusCode ? (
          <span>
            A server error occurred: <b> {statusCode}.</b>
          </span>
        ) : (
          "We encountered an error loading this page. "
        )}
        Please try again later.
      </span>
    </p>
  </section>
);

errorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default errorPage;

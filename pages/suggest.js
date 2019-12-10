import Fade from "react-reveal/Fade";

import Layout from "../components/Layout";

const laboratorians = [
  "/assets/16655830.jpeg",
  "/assets/25912292.jpeg",
  "/assets/26350518.jpeg",
  "/assets/31043587.jpeg"
];

const Suggest = () => (
  <Layout>
    <Fade top>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-3">¡Gracias por tu valiosa observación!</h1>
            <br />
            <h1 className="subtitle is-4">Ayuda a crecer a: </h1>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="columns is-mobile is-multiline">
          {laboratorians.map((laboratorianimg, i) => {
            return (
              <figure
                className="hvr-grow column image is-rounded is-96x96"
                key={i}
              >
                <img className="is-rounded" src={laboratorianimg} />
              </figure>
            );
          })}
        </div>
      </section>
    </Fade>
  </Layout>
);

export default Suggest;

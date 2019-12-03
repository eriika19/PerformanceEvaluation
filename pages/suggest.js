import Layout from "../components/Layout";

const laboratorians = [
  "/assets/16655830.jpeg",
  "/assets/25912292.jpeg",
  "/assets/26350518.jpeg",
  "/assets/31043587.jpeg"
];

const Suggest = () => (
  <Layout>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-3">¡Gracias por tu valiosa observación!</h1>
          <br/>
          <h1 className="subtitle is-4">Ayuda a crecer a: </h1>
        </div>
      </div>
    </section>
    <section className="container">
    <div className="columns is-mobile is-multiline">
      {laboratorians.map(laboratorianimg => {
        return (
          <figure className="column image is-rounded is-96x96">
            <img className="is-rounded" src={laboratorianimg} />
          </figure>
        );
      })}
      </div>
    </section>
      
  </Layout>    
);

export default Suggest;

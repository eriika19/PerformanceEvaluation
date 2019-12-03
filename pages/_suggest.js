import Navbar from "../components/Navbar"

const laboratorians=['/assets/16655830.jpeg', '/assets/25912292.jpeg', '/assets/26350518.jpeg', '/assets/31043587.jpeg'] ;

const Suggest = () => (
    <div>
        <Navbar/>
        <section className="hero">
          {/* <User user={user} thumbnail="/assets/Lizzie.jpg" /> */}
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Ayuda a crecer a: </h1>
            </div>
          </div>
        </section>
        <div className="columns is-mobile is-multiline">
            {laboratorians.map((laboratorianimg) => {
            return <figure className="column image is-rounded is-96x96">
                <img className="is-rounded" src={laboratorianimg}/>
                </figure>     
            })}
        </div>
    </div>
);

export default Suggest;
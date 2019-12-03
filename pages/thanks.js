const skills=['/assets/16655830.jpeg', '/assets/25912292.jpeg', '/assets/26350518.jpeg', '/assets/31043587.jpeg'] ;

const Thanks = () => (
    <div>
        <section className="hero">
        {/* <User user={user} thumbnail="/assets/Lizzie.jpg" /> */}
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">¡Gracias! </h1>
                    <h2 className="subtitle">Esto es lo que has mejorado este año </h2>
                    <div className="columns is-mobile is-multiline">
                        {skills.map((skill) => {
                        return <figure className="column image is-rounded is-96x96">
                            <img className="is-rounded" src={skill}/>
                            </figure>     
                        })}
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Thanks;
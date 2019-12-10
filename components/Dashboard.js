import { Chart } from "react-google-charts";

const Dashboard = ({ data, name }) => {
  if (data === null) {
    return (
      <div className="container">
        <h1 className="title is-3 is-spaced">
          Bienvenido a la sección de gráficas de gestión de desempeño
        </h1>
        <h2 className="subtitle">Ingresa nombre/id requerido</h2>
      </div>
    );
  }
  if (data === false) {
    return (
      <div className="container">
        <h1 className="title is-3 is-spaced">
          No se encontró laboratorian que coincida con ese id/nombre
        </h1>
        <h2 className="subtitle">Ingresa un nombre/id existente porfavor</h2>
      </div>
    );
  } else {
    return (
      <section id="dashboard">
        <h1 className="title">Gráfica de desempeño</h1>
        <article className="media">
          <div className="media-content">
            <Chart
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={data}
              options={{
                title: name,
                chartArea: { width: "70%" },
                hAxis: {
                  title: "Valores",
                  minValue: 0
                },
                vAxis: {
                  title: "Indicador"
                }
              }}
              legendToggle
            />
          </div>
        </article>
      </section>
    );
  }
};

export default Dashboard;

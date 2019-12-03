//import Link from "next/link";
import { Chart } from "react-google-charts";

const Dashboard = props => (
  <section id="dashboard">
    <div style={{ display: "flex", maxWidth: 900 }}>
      <Chart
        width={1000}
        height={600}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["2019", "Enero - Junio", "Julio - Diciembre"],
          ["New York City, NY", 8175000, 8008000],
          ["Los Angeles, CA", 3792000, 3694000],
          ["Chicago, IL", 2695000, 2896000],
          ["Houston, TX", 2099000, 1953000],
          ["Philadelphia, PA", 1526000, 1517000]
        ]}
        options={{
          title: "Métrica de crecimiento",
          chartArea: { width: "70%" },
          hAxis: {
            title: "Total Population",
            minValue: 0
          },
          vAxis: {
            title: "Métrica"
          }
        }}
        legendToggle
      />
    </div>
   
  </section>
);

/* Dashboard.getInitialProps = async ({ query: { id } }) => {
  const index = parseInt(id, 10) - 1;

  const res = await fetch("https://sheetsu.com/apis/v1.0bu/eb9ea47f3df7");
  const data = await res.json();

    const { question } = data[index];
    return {
      question,
      id
    };
}; */

export default Dashboard;
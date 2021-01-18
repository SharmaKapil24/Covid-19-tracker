import React, { Component } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

class Charts extends Component {
  state = {
    dailyData: [],
  };
  componentDidMount = () => {
    this.fetchDailyData();
  };
  fetchDailyData = () => {
    const url = "https://api.covidtracking.com/v1/us/daily.json";
    axios.get(url).then((res) => {
      this.setState({ dailyData: res });
      console.log(this.props.country);
    });
  };

  render() {
    
    const dailyData = this.state.dailyData;
    const arr= this.props.data
    console.log(arr.confirmed)
    console.log(this.props.data.confirmed )
    
    const LineChart = dailyData.data ? (
      <Line
        data={{
          labels: dailyData.data.map((data) => data.dateChecked.slice(0, 10)),
          datasets: [
            {
              data: dailyData.data.map((data) => data.positive),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.data.map((data) => data.death),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: true,
            },
            {
              data: dailyData.data.map((data) => data.recovered),
              label: "Recovered",
              borderColor: "green",
              backgroundColor: "rgba(0, 255, 0, 0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;
  
    return <div className={styles.container}>
    {this.props.country ?   this.props.data.confirmed.value? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [this.props.data.confirmed.value, this.props.data.recovered.value, this.props.data.deaths.value],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: "Current state in "+this.props.country },
          }}
        />
      ) : null : LineChart}
  </div>;
  }
}

export default Charts;

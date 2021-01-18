import React, { Component } from "react";
import Card from "./components/cards/Card";
import CountryPicker from "./components/countrypicker/CountryPicker";
import Charts from "./components/charts/Chart";
import styles from "./App.module.css";
import axios from "axios";
import image from "./images/image.png"
import Footer from './components/footer/footer'

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    const url = "https://covid19.mathdro.id/api";
    axios.get(url).then((res) => {
      this.setState({ data: res.data });
      
    });
  };


  onChangeHandler = (country) => {
      const url = "https://covid19.mathdro.id/api/countries/"+country;
      this.setState({country: country})
      axios.get(url).then((res) => {
          const data = res.data;
          this.setState({
            data: data,
          });
      });
  };

  render() {
    return (
      <div className={styles.container}>
         <img className={styles.image} src={image} alt="COVID-19" />
        <Card data={this.state.data}></Card>

        <CountryPicker changeHandler={this.onChangeHandler}></CountryPicker>
        <Charts data={this.state.data} country={this.state.country}></Charts>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;



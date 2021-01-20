import React, { Component } from "react";
import axios from "axios";
import styles from "./CountryPicker.module.css";
import { NativeSelect, FormControl } from "@material-ui/core";

class CountryPicker extends Component {
  state = {
    countryData: [],
    country:'',
    countryDat:[]
  };

  componentDidMount = () => {
    this.fetchCountries();
  };

  fetchCountries = () => {
    const url = "https://covid19.mathdro.id/api/countries";
    axios.get(url).then((res) => {
      if (res.data.countries.length > 0) {
        const countries = res.data.countries.map((name) => name.name);
        this.setState({
          countryData: countries,
        });
      }
    });
  };

 
  

  render() {
    return (
      <FormControl className={styles.formControl}>
        <NativeSelect
        defaultValue=""
          onChange={(e) => this.props.changeHandler(e.target.value)}
        >
          <option value="US">US</option>
          {this.state.countryData.map((data, i) => (
            <option value={data} key={i}>
              {data}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    );
  }
}
export default CountryPicker;

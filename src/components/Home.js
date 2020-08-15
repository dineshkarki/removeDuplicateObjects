import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  getUnique(arr, comp) {
    // store the comparison  values in array
    const unique = arr
      .map(e => e[comp])

      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the false indexes & return unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);

    return unique;
  }

  render() {
    const countries = require("../countries.json");
    const uniqueCountry = this.getUnique(countries.world, "country");
    return (
      <form>
        <select>
          {uniqueCountry.map(item => (
            <option key={item.id} value={item.country}>
              {item.country}
            </option>
          ))}
        </select>
      </form>
    );
  }
}

export default Home;

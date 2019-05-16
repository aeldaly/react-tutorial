import React, { Component } from 'react';
import axios from 'axios';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.handleSelectCity = this.handleSelectCity.bind(this);
    this.state = {
      city: null,
      temperature: null,
      textStyle: {
        color: 'black'
      }
    };
  }

  handleSelectCity(e) {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    if (city) {
      this.setState( () => {
        return { city };
      });
    }
    e.target.elements.city.value = '';

    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        units: "metric",
        APPID: "5dc1ac3ffba285247e07efa5d1f03f90",
      }
    })
      .then( (res) => {
        const temperature = res.data.main.temp;
        if (temperature) {
          const textStyle = {
            color: this.setColor(temperature)
          };
          this.setState( () => {
            return {
              temperature,
              textStyle
            };
          });
        }
      })
      .catch( (e) => {
        alert(e.message);
      });
  }

  setColor(temperature) {
    if (temperature < -10) {
      return 'STEELBLUE';
    } else if (temperature < 0) {
      return 'LIGHTBLUE';
    } else if (temperature < 10) {
      return 'DARKSEAGREEN';
    } else if (temperature < 20) {
      return 'GOLD';
    } else {
      return 'CRIMSON';
    }
  }

  render() {
    return (
      <div>
        <label>Enter City</label>
        <form onSubmit={this.handleSelectCity}>
          <input type="text" name="city"/>
          <button>Check Weather</button>
        </form>
        <div style={this.state.textStyle}>
          {
            this.state.temperature &&
            <p>Current temperature in {this.state.city}: {this.state.temperature}</p>
          }
        </div>
      </div>
    )
  };
}

export default WeatherApp;
import React, { Component } from "react"

class Location extends Component {

  state = {
    coordinates: []
  }

  componentDidMount() {
    const getPosition = options => {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
      })
    }

    getPosition()
      .then((position) => {
        const lat = +position.coords.latitude.toFixed(6)
        const long = +position.coords.longitude.toFixed(6)
        this.setState({
          coordinates: [...this.state.coordinates, lat, long]
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>{`${this.state.coordinates[0]}°  ${this.state.coordinates[1]}° `}</h1>
      </div>

    )
  }
}

export default Location
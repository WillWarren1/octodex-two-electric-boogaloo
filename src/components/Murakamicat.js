import React, { Component } from 'react'
import MurikamicatImage from '../images/murakamicat.png'

class Murakamicat extends Component {
  render() {
    return (
      <figure>
        <a href="https://octodex.github.com//murakamicat">
          <img src={MurikamicatImage} alt="murikamicat" />
        </a>
        <figcaption>
          the
          <a
            className="cattitle"
            href="https://octodex.github.com//murakamicat">
            {this.props.name}
          </a>
          by
          <a href="https://github.com/billyroh">
            <img
              className="authorpic"
              src="https://github.com/billyroh.png"
              alt="artist profile pic"
            />
          </a>
        </figcaption>
      </figure>
    )
  }
}

export default Murakamicat

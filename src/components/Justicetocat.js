import React, { Component } from 'react'

import JusticecatImage from '../images/justicetocat.jpg'

class Justicetocat extends Component {
  render() {
    return (
      <figure>
        <a href="https://octodex.github.com//justicetocat">
          <img src={JusticecatImage} alt="justicetocat" />
        </a>
        <figcaption>
          the
          <a
            className="cattitle"
            href="https://octodex.github.com//justicetocat">
            {this.props.name}
          </a>
          by
          <a href="https://github.com/heyhayhay">
            <img
              className="authorpic"
              src="https://github.com/heyhayhay.png"
              alt="artist profile pic"
            />
          </a>
        </figcaption>
      </figure>
    )
  }
}

export default Justicetocat

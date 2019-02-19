import React, { Component } from 'react'
import VinylcatImage from '../images/vinyltocat.png'
class Vinylcat extends Component {
  render() {
    return (
      <figure>
        <a href="https://octodex.github.com//vinyltocat">
          <img src={VinylcatImage} alt="vinyltocat" />
        </a>
        <figcaption className="weird2">
          the
          <a className="cattitle" href="https://octodex.github.com//vinyltocat">
            {this.props.name}
          </a>
          by
          <a href="https://github.com/suziejurado">
            <img
              className="authorpic"
              src="https://github.com/suziejurado.png"
              alt="artist profile pic"
            />
          </a>
        </figcaption>
      </figure>
    )
  }
}

export default Vinylcat

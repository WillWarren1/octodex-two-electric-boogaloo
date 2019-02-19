import React, { Component } from 'react'

import SurfcatImage from '../images/surftocat.png'

class Surfcat extends Component {
  render() {
    return (
      <figure>
        <a href="https://octodex.github.com//suftocat">
          <img src={SurfcatImage} alt="surftocat" />
        </a>
        <figcaption className="weird2">
          the
          <a className="cattitle" href="https://octodex.github.com//suftocat">
            {this.props.name}
          </a>
          by
          <a href="https://github.com/jeejkang">
            <img
              className="authorpic"
              src="https://github.com/jeejkang.png"
              alt="artist profile pic"
            />
          </a>
        </figcaption>
      </figure>
    )
  }
}

export default Surfcat

import React, { Component } from 'react'
import LilCat from '../images/lilcat.png'
class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="stuff">RSS FAQ</section>
        <img className="lilcat" src={LilCat} alt="little cat" />
        <section className="stuff">
          © 2013 – 2019 GitHub, Inc. All rights reserved
        </section>
      </footer>
    )
  }
}

export default Footer
